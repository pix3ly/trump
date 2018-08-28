var axios = require('axios')

module.exports = (config, arguments, respond) => {
    if (arguments.length != 1) {
        respond(['You gave an incorrect amount of arguments'])
    } else {
        const target = arguments[0]

        axios.get('https://reddit.com/r/' + target + '.json').then(function (response) {
            const json = response.data

            const threads = json.data.children
            const randomThread = getRandomThread(threads)

            if (randomThread == null) {
                respond(['Couldn\'t find any post with image'])
            } else {
                let a = randomThread.data.preview.images[0].source.url

                const domain = randomThread.data.domain
                const url = randomThread.data.url

                if (domain == 'imgur.com' || domain == 'i.imgur.com') {
                    const extension = url.substr(url.length - 4)

                    if (extension == 'gifv' || extension == 'gif') {
                        a = url
                    }
                } else if (domain == 'gfycat.com') {
                    a = randomThread.data.preview.images[0].variants.gif.source.url
                }

                respond([a])
            }
        })
    }
}

function getRandomThread(threads) {
    let direction = 'down'
    let wentThroughAll = false

    let randomIndex = Math.floor(Math.random() * threads.length)

    while (!threads[randomIndex].data.preview && !wentThroughAll) {
        // Going down
        if (direction == 'down') {
            if (randomIndex < threads.length - 1) {
                randomIndex ++
            } else {
                direction = 'up'
            }
        }

        // Going up
        if (direction == 'up') {
            if (randomIndex > 0) {
                randomIndex --
            } else {
                wentThroughAll = true
            }
        }
    }

    if (wentThroughAll) {
        return null
    } else {
        return threads[randomIndex]
    }
}
