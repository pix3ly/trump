module.exports = (respond) => {
    const date = new Date();

    respond([date.getHours() + ' o\'clock']);
};
