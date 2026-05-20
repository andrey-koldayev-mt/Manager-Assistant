const fs = require('fs');
const path = require('path');

const API_KEY = 'vibe_app_local_6a0ddbbead6605_09776884_raaSgV0GudcDgDpT7Wwj0A6uYdw9alzPzbGxN3PlR1U7n2y1tz_dba8ff';
const SERVER_ID = '9555e753-47cb-4f31-a7db-b7919f0d90bd';

async function deploy() {
  console.log('Reading app.zip archive...');
  const zipPath = path.join(__dirname, 'app.zip');
  if (!fs.existsSync(zipPath)) {
    throw new Error('app.zip file not found! Please run archive script first.');
  }

  const fileBuffer = fs.readFileSync(zipPath);
  const base64Content = fileBuffer.toString('base64');
  console.log(`Payload size: ${fileBuffer.length} bytes (${base64Content.length} chars base64)`);

  const payload = {
    source: {
      content: base64Content,
      format: 'zip'
    },
    runtime: 'node20',
    install: 'cd /opt/app && npm install',
    preStart: 'cd /opt/app && npm run build',
    start: 'cd /opt/app && node dist/app/server/server.mjs',
    port: 3000,
    env: {
      NODE_ENV: 'production'
    },
    cleanDeploy: true
  };

  console.log(`Sending deployment request to server ${SERVER_ID}...`);
  const response = await fetch(`https://vibecode.bitrix24.tech/v1/infra/servers/${SERVER_ID}/deploy?stream=false`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': API_KEY
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

deploy().catch(err => {
  console.error('Fatal Deployment Error:', err);
  process.exit(1);
});
