const axios = require('axios')

module.exports = (config, arguments, respond) => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + arguments.join(' ') + '&units=metric&appid=' + config.weather.apiKey).then(response => {
        const json = response.data

        let icon = false

        switch (json.weather[0].icon) {
            case '01d':
                icon = ':sunny:'
                break;

            case '01n':
                icon = ':waxing_crescent_moon:'
                break;

            case '03d':
            case '03n':
            case '04d':
            case '04n':
                icon = ':cloud:'
                break;

            case '09d':
            case '09n':
            case '10d':
            case '10n':
                icon = ':cloud_rain:'
                break;

            case '11d':
            case '11n':
                icon = ':cloud_lightning:'
                break;

            case '13d':
            case '13n':
                icon = ':cloud_snow:'
                break;

            case '50d':
            case '50n':
                icon = ':fog:'
                break;
        }

        let message = 'Conditions for ' + json.name + ', ' + json.sys.country

        if (icon) {
            message += ' · ' + icon
        }

        // Temperature
        message += ' · Temperature: ' + json.main.temp + '°C'

        // Humidity
        message += ' · Humidity: ' + json.main.humidity + '%'

        // Wind
        message += ' · Wind: ' + Number(json.wind.speed * 3.6).toFixed(1) + ' km/h'

        respond([message])
    }).catch(error => {
        respond(['Error'])
    })
}
