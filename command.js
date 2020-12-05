var { prefix } = require('./config.json')

module.exports = (bot, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }

    bot.on('message', message => {
        var { content } = message;

        aliases.forEach(alias => {
            var command = `${prefix}${alias}`

            if (content.startsWith(`${command} `) || content === command) {
                callback(message)
            }
        })
    })
}