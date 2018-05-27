var axios = require('axios')

module.exports = (config, arguments, respond) => {
    if (arguments.length != 1) {
        respond(['You gave an incorrect amount of arguments'])
    } else {
        const target = arguments[0].toUpperCase()

        axios.get('https://min-api.cryptocompare.com/data/price?fsym=' + target + '&tsyms=USD').then(function (response) {
            const json = response.data

            respond([target + ' is currently $' + json['USD']])
        })
    }
}
