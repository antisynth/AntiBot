const { MessageEmbed } = require('discord.js') 

module.exports = {
    commands: 'rate',
    minArgs: 1,
    maxArgs: 999,
    expectedArgs: '<user>',
    callback: (message, args) => {
        try {
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max))
            }
    
            let target = message.mentions.members.first() || 
                message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || 
                message.guild.members.cache.get(args[0]) || 
                message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
            const rating = getRandomInt(6)
            const message_author_avatar = message.author.avatarURL()
            const target_avatarURL = target.user.avatarURL()

            let set_emojis = undefined
            if (rating === 0) set_emojis = ''
            if (rating === 1) set_emojis = ':star:'
            if (rating === 2) set_emojis = ':star: :star:'
            if (rating === 3) set_emojis = ':star: :star: :star:'
            if (rating === 4) set_emojis = ':star: :star: :star: :star:'
            if (rating === 5) set_emojis = ':star: :star: :star: :star: :star:'
    
            const embed = new MessageEmbed()
            .setAuthor(`${target.user.username}'s rating`, target_avatarURL)
            .setDescription(`I rate ${target.user.username} ${rating}/5 stars\n\n${set_emojis}`)
            .setFooter(`Requested by ${message.author.username}`, message_author_avatar)
            message.channel.send(embed)
        } catch (err) {
            message.channel.send('```diff\n-Cannot read property \'user\' of undefined-\n```')
            message.channel.send('Make sure you\'re entering a real username.')
            console.error(err)
        } finally {
            console.log('Running command \'rate\'')
        }
    }
}