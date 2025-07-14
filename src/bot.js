require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const scheduler = require('./scheduler');
const ultimasCommand = require('./commands/ultimas');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.commands = new Collection();
client.commands.set('ultimas', ultimasCommand);

client.once('ready', () => {
  console.log(`✅ Bot online como ${client.user.tag}`);
  scheduler.start(client);
});

client.on('messageCreate', async message => {
  if (!message.content.startsWith('!') || message.author.bot) return;

  const commandName = message.content.slice(1).split(' ')[0];

  if (client.commands.has(commandName)) {
    try {
      await client.commands.get(commandName).execute(message);
    } catch (error) {
      console.error(error);
      message.reply('❌ Ocorreu um erro ao executar o comando.');
    }
  }
});

client.login(process.env.TOKEN);
