module.exports = {
    token: 'PLACEHOLDER',
    dictionary: {
        dice: require('./dictionary/dice')
    },
    feeds: [
        {
            channel: 'PLACEHOLDER',
            action: require('./feeds/time')
        }
    ]
};
