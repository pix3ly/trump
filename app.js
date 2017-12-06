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
            config.dictionary[command](config, arguments, (responses) => {
                responses.forEach((response) => {
                    msg.channel.sendMessage(response);
                });
            });
        }
    }
});

function prepareForFeeds() {
    const date = new Date();

    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    if (minutes == '00' && seconds == '00') {
        executeFeeds();
    } else {
        setTimeout(executeFeeds, 60 * (60 - minutes) * 1000 - seconds);
    }
}

function executeFeeds() {
    config.feeds.forEach((feed) => {
        feed.action((responses) => {
            responses.forEach((response) => {
                client.channels.get(feed.channel).sendMessage(response);
            });
        });
    });

    setInterval(executeFeeds, 60 * 60 * 1000);
}

client.login(config.token);

client.on('ready', () => {
    prepareForFeeds();
});
