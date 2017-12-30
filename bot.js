const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'nut') {
    	message.reply('I"LL NUT IN YOUR GRANDMA!');
  	}
});

client.on('message', message => {
    if (message.content === 'rape') {
    	message.channel.send('NIGGERS!');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
