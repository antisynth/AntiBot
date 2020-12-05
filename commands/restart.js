var { token } = require('../config.json')

module.exports = {
    commands: ['restart', 'reloadclient'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message) => {
        if (message.author.id !== '461340349680582667') return;
        console.log('Restarting bot via restart command.')
        for (i = 0; i < 5; i++) {
            await bot.destroy()
            setTimeout(() => 1000)
            await bot.login(token)
        }
        await console.log('Restart command complete')
    }
}