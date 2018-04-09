module.exports = {
    token: 'PLACEHOLDER',
    dictionary: {
        dice: require('./dictionary/dice'),
        weather: require('./dictionary/weather'),
        stock: require('./dictionary/stock')
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
