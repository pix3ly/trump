const request = require('request')
const xml2js = require('xml2js')
const moment = require('moment')

const parser = new xml2js.Parser()

module.exports = (config, arguments, respond) => {
    request('https://www.nu.nl/rss/Algemeen', (error, response, data) => {
        parser.parseString(data, (error, result) => {
            let articles = ''

            result.rss.channel[0].item.forEach(item => {
                articles += item.title + ' · ' + moment(item.pubDate, 'ddd, DD MMM YYYY HH:mm:ss').format('HH:mm') + ' · <' + item.guid[0]._ + '>\n\n'
            })

            respond([articles])
        })
    })
};
