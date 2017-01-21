const config = require('./config.js');

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', (msg) => {
    const command = msg.content.replace('!', '');

    if (config.dictionary[command]) {
        msg.channel.sendMessage(config.dictionary[command]());
    }
});

client.login(config.token);
