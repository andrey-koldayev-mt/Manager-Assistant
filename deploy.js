const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.VIBE_BASE_URL || 'https://vibecode.bitrix24.tech/v1';

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
      content: fileBuffer.toString('base64')
    },
    runtime: 'node20',
    install: 'cd /opt/app/.output/server && npm install --omit=dev --ignore-scripts',
    preStart: 'cd /opt/app && test -f .output/server/index.mjs',
    start: 'cd /opt/app && PORT=3000 node .output/server/index.mjs',
    port: 3000,
    env: {
      NODE_ENV: 'production',
      VIBE_API_KEY: apiKey
    },
    cleanDeploy: true
  };
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

async function deploy() {
  const deployApiKey = requiredEnv('VIBE_DEPLOY_API_KEY');
  const appApiKey = requiredEnv('VIBE_APP_API_KEY');
  const serverId = requiredEnv('VIBE_SERVER_ID');

  console.log('Reading app.zip archive...');
  const zipPath = path.join(__dirname, 'app.zip');
  if (!fs.existsSync(zipPath)) {
    throw new Error('app.zip file not found! Please run archive script first.');
  }

  const fileBuffer = fs.readFileSync(zipPath);
  const payload = createDeployPayload(fileBuffer, appApiKey);
  console.log(`Payload size: ${fileBuffer.length} bytes (${payload.source.content.length} chars base64)`);

  console.log(`Sending deployment request to server ${serverId}...`);
  const { response, data: result, text } = await fetchJson(`${BASE_URL}/infra/servers/${serverId}/deploy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': deployApiKey
    },
    body: JSON.stringify(payload)
  });

  console.log(`Response status: ${response.status} ${response.statusText}`);
  if (!response.ok) {
    const hint = result?.error?.buildHint || result?.error?.hint;
    throw new Error(`Deploy request failed: ${response.status} ${response.statusText} ${text.slice(0, 500)}${hint ? `\nHint: ${typeof hint === 'string' ? hint : JSON.stringify(hint)}` : ''}`);
  }

  console.log('\nDeployment Result JSON:');
  console.log(JSON.stringify(result, null, 2));

  if (!result?.success) {
    const error = result?.error || {};
    throw new Error(`Galaxy deployment failed${error.step ? ` at ${error.step}` : ''}: ${error.code || 'UNKNOWN'} ${error.message || 'No error message returned'}`);
  }

  console.log(`Galaxy deployment completed: ${result.data?.appUrl || 'application URL was not returned'}`);
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
