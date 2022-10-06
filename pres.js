//908303571794153503

const clientId = '908303571794153503';
const scopes = ['rpc', 'rpc.api', 'messages.read'];

const client = new RPC.Client({ transport: 'websocket' });

client.on('ready', () => {
  console.log('Logged in as', client.application.name);
  console.log('Authed for user', client.user.username);

  client.selectVoiceChannel('977552794183696459');
});

// Log in to RPC with client id
client.login({ clientId, scopes });
