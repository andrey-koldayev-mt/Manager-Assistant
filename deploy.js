const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.VIBE_BASE_URL || 'https://vibecode.bitrix24.tech/v1';
const INSTALL_NODE_22 = 'apt-get update && apt-get install -y ca-certificates curl && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -y nodejs';

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
    install: `${INSTALL_NODE_22} && cd /opt/app && node --version && npm ci`,
    preStart: 'cd /opt/app && node --version && npm run build',
    start: 'cd /opt/app && PORT=3000 node dist/app/server/server.mjs',
    port: 3000,
    env: {
      NODE_ENV: 'production',
      VIBE_API_KEY: apiKey
    },
    cleanDeploy: true
  };
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
  const response = await fetch(`${BASE_URL}/infra/servers/${serverId}/deploy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey
    },
    body: JSON.stringify(payload)
  });

  console.log(`Response status: ${response.status} ${response.statusText}`);
  const result = await response.json();
  console.log('\nDeployment Result JSON:');
  console.log(JSON.stringify(result, null, 2));

  if (!result.success) {
    process.exit(1);
  }
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
  requiredEnv
};
