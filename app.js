const config = require('./config.js');

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', (msg) => {
    let request = msg.content;

    if (request.substring(0, 1) === '!') {
        request = request.substring(1);

        const parts = request.split(' ');

        const command = parts[0];
        const arguments = parts.splice(1, parts.length - 1);

        if (config.dictionary[command]) {
            config.dictionary[command](arguments, (responses) => {
                responses.forEach((response) => {
                    msg.channel.sendMessage(response);
                });
            });
        }
    }
});

client.login(config.token);
