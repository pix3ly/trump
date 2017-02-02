module.exports = (arguments, respond) => {
    let cap = 6;

    if (arguments[0]) {
        cap = arguments[0];
    }

    respond([Math.floor((Math.random() * cap) + 1)]);
};
