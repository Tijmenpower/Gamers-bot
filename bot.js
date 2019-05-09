const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.faceeee.1352}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

// THIS MUST BE THIS WAY
client.login('8aV_34Nrz5ZZRngexYAMCzXriA2UvO_n');
