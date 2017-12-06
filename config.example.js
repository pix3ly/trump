module.exports = {
    token: 'PLACEHOLDER',
    dictionary: {
        dice: require('./dictionary/dice'),
        weather: require('./dictionary/weather')
    },
    feeds: [
        {
            channel: 'PLACEHOLDER',
            action: require('./feeds/time')
        }
    ],
    weather: {
        apiKey: 'PLACEHOLDER'
    }
};
