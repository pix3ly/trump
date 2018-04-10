var request = require('request')
var cheerio = require('cheerio')

module.exports = (config, arguments, respond) => {
    if (arguments.length != 1) {
        respond(['You gave an incorrect amount of arguments'])
    } else {
        var target = arguments[0]

        request('https://www.marketwatch.com/investing/stock/' + target, function (error, response, body) {
            var somethingHasGoneWrong = false

            if (error || response.statusCode != 200) {
                somethingHasGoneWrong = true
            }

            if (!somethingHasGoneWrong) {
                var $ = cheerio.load(body)

                var name = $('.company__name').text()
                var price = $('.intraday__price .value').text()

                if (!name || !price) {
                    somethingHasGoneWrong = true
                } else {
                    respond([name + ' (' + String(target).toUpperCase() + ') is currently $' + price])
                }
            }

            if (somethingHasGoneWrong) {
                respond(['Shit has hit the fan'])
            }
        })
    }
}
