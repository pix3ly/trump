module.exports = {
    token: 'PLACEHOLDER',
    dictionary: {
        dice: (arguments, respond) => {
            respond([Math.floor((Math.random() * arguments[0]) + 1)]);
        }
    }
};
