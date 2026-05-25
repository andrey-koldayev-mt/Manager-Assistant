const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.VIBE_BASE_URL || 'https://vibecode.bitrix24.tech/v1';
const INSTALL_NODE_22 = 'apt-get update && apt-get install -y ca-certificates curl && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -y nodejs';
const VERIFY_TIMEOUT_MS = Number(process.env.VIBE_DEPLOY_VERIFY_TIMEOUT_MS || 300000);
const VERIFY_INTERVAL_MS = Number(process.env.VIBE_DEPLOY_VERIFY_INTERVAL_MS || 10000);

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function createDeployPayload(fileBuffer, apiKey) {
  return {
    source: {
      content: fileBuffer.toString('base64'),
      format: 'zip'
    },
    install: `${INSTALL_NODE_22} && cd /opt/app/.output/server && node --version && npm install --omit=dev`,
    preStart: 'cd /opt/app && node --version && test -f .output/server/index.mjs',
    start: 'cd /opt/app && PORT=3000 node .output/server/index.mjs',
    port: 3000,
    env: {
      NODE_ENV: 'production',
      VIBE_API_KEY: apiKey
    },
    cleanDeploy: true
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();

  if (!text.trim()) {
    return { response, data: null, text };
  }

  try {
    return { response, data: JSON.parse(text), text };
  } catch (error) {
    error.response = response;
    error.responseText = text;
    throw error;
  }
}

async function refreshServerState(apiKey, serverId) {
  try {
    await fetch(`${BASE_URL}/infra/servers/${serverId}/refresh`, {
      method: 'POST',
      headers: { 'X-Api-Key': apiKey }
    });
  } catch {
    // Best effort only. The next poll will surface the real state.
  }
}

async function verifyDeployedApp(apiKey, serverId, timeoutMs = VERIFY_TIMEOUT_MS) {
  const startedAt = Date.now();
  let lastError = 'verification did not run';

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const { response: serverResponse, data: serverResult } = await fetchJson(
        `${BASE_URL}/infra/servers/${serverId}`,
        { headers: { 'X-Api-Key': apiKey } }
      );

      if (!serverResponse.ok || !serverResult?.success) {
        lastError = `server status request failed: ${serverResponse.status}`;
        await sleep(VERIFY_INTERVAL_MS);
        continue;
      }

      const server = serverResult.data;
      if (server?.blackholeStatus !== 'CONNECTED') {
        lastError = `server ${server?.status || 'unknown'}, blackhole ${server?.blackholeStatus || 'unknown'}`;
        await refreshServerState(apiKey, serverId);
        await sleep(VERIFY_INTERVAL_MS);
        continue;
      }

      const { response: tokenResponse, data: tokenResult } = await fetchJson(
        `${BASE_URL}/infra/servers/${serverId}/access-tokens`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey
          },
          body: JSON.stringify({
            mode: 'api-bearer',
            name: 'deploy-verification',
            ttlSeconds: 300
          })
        }
      );

      if (!tokenResponse.ok || !tokenResult?.success || !tokenResult.data?.token || !tokenResult.data?.appUrl) {
        lastError = `access token mint failed: ${tokenResponse.status}`;
        await sleep(VERIFY_INTERVAL_MS);
        continue;
      }

      const runtimeResponse = await fetch(`${tokenResult.data.appUrl}/api/debug/runtime`, {
        headers: {
          Authorization: `Bearer ${tokenResult.data.token}`
        }
      });
      const runtimeContentType = runtimeResponse.headers.get('content-type') || '';
      const runtimeText = await runtimeResponse.text();

      if (!runtimeResponse.ok || !runtimeContentType.includes('application/json')) {
        lastError = `runtime check returned ${runtimeResponse.status} ${runtimeContentType}: ${runtimeText.slice(0, 120)}`;
        await sleep(VERIFY_INTERVAL_MS);
        continue;
      }

      const runtime = JSON.parse(runtimeText);
      if (runtime?.success && runtime?.data?.path === '/api/debug/runtime') {
        console.log('Deployment verification passed: app runtime is reachable through Black Hole.');
        return true;
      }

      lastError = `runtime check returned unexpected JSON: ${runtimeText.slice(0, 200)}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }

    await sleep(VERIFY_INTERVAL_MS);
  }

  throw new Error(`Deployment verification failed after ${timeoutMs}ms: ${lastError}`);
}

async function deploy() {
  const apiKey = requiredEnv('VIBE_API_KEY');
  const serverId = requiredEnv('VIBE_SERVER_ID');

  console.log('Reading app.zip archive...');
  const zipPath = path.join(__dirname, 'app.zip');
  if (!fs.existsSync(zipPath)) {
    throw new Error('app.zip file not found! Please run archive script first.');
  }

  const fileBuffer = fs.readFileSync(zipPath);
  const payload = createDeployPayload(fileBuffer, apiKey);
  console.log(`Payload size: ${fileBuffer.length} bytes (${payload.source.content.length} chars base64)`);

  console.log(`Sending deployment request to server ${serverId}...`);
  let result = null;
  try {
    const { response, data, text } = await fetchJson(`${BASE_URL}/infra/servers/${serverId}/deploy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': apiKey
      },
      body: JSON.stringify(payload)
    });

    console.log(`Response status: ${response.status} ${response.statusText}`);
    if (!response.ok) {
      throw new Error(`Deploy request failed: ${response.status} ${response.statusText} ${text.slice(0, 500)}`);
    }

    if (!data) {
      console.warn('Deploy returned an empty 2xx response body; verifying deployed app state instead.');
    }
    result = data;
  } catch (error) {
    console.warn('Deploy response could not be read as complete JSON; verifying deployed app state instead.');
    console.warn(error instanceof Error ? error.message : String(error));
    await verifyDeployedApp(apiKey, serverId);
    return;
  }

  console.log('\nDeployment Result JSON:');
  console.log(JSON.stringify(result, null, 2));

  if (!result) {
    await verifyDeployedApp(apiKey, serverId);
    return;
  }

  if (!result.success) {
    process.exit(1);
  }

  await verifyDeployedApp(apiKey, serverId);
}

if (require.main === module) {
  deploy().catch(err => {
    console.error('Fatal Deployment Error:', err);
    process.exit(1);
  });
}

module.exports = {
  createDeployPayload,
  deploy,
  fetchJson,
  requiredEnv
};
