const Discord = require('discord.js')

module.exports = {
    commands: ['ping', 'latency'],
    callback: (message, args, text, bot) => {
        try {
            message.channel.send('Returning pong...').then(m => {
                const ping = m.createdTimestamp - message.createdTimestamp
                const message_author_avatar = message.author.avatarURL()
                const embed = new Discord.MessageEmbed()
                .setTitle('Ping')
                .setDescription(
                    `:ping_pong: Pong!\nClient latency: ${ping}ms\nAPI latency: ${bot.ws.ping}ms`
                    )
                .setFooter(`Requested by ${message.author.username}`, message_author_avatar)
                
                m.delete()
                message.channel.send(embed)
            })
        } catch (err) {
            message.channel.send('Error while returning pong')
            throw new Error(err)
        } finally {
            console.log('Running command \'ping\'')
        }
    }
}