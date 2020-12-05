const { prefix } = require('../config.json')

module.exports = {
    commands: 'status',
    minArgs: 1,
    maxArgs: 1,
    callback: (message) => {
        if (message.author.id !== '461340349680582667') return;
        const content = message.content.replace(`${prefix}status `, '')
        bot.user.setPresence({
            activity: {
                name: content
            }
        });
    }
}