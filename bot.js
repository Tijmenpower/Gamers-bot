const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

// ThIS MUST BE THIS WAY
client.login('8aV_34Nrz5ZZRngexYAMCzXriA2UvO_n');
