const { MessageEmbed } = require('discord.js') 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

module.exports = {
    commands: ['gayrate', 'howgay'],
    expectedArgs: '<user>',
    minArgs: 1,
    maxArgs: 50,
    callback: (message, args) => {
        try {
            const target = message.mentions.members.first() || 
                message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || 
                message.guild.members.cache.get(args[0]) || 
                message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
                const how_gay = getRandomInt(101)
                const target_avatar = target.user.avatarURL()
                const message_author_avatar = message.author.avatarURL()
                let bar_image_link = undefined

            if (how_gay <= 25) bar_image_link = 'https://i.imgur.com/nzrVinK.png'
            if (how_gay >= 26) bar_image_link = 'https://i.imgur.com/cxJNZDp.png'
            if (how_gay >= 51) bar_image_link = 'https://i.imgur.com/duuo51O.png'
            if (how_gay >= 76) bar_image_link = 'https://i.imgur.com/Ap72UXu.png'

            let emoji = undefined

            if (how_gay >= 50) emoji = ':rainbow_flag:'
            if (how_gay <= 50) emoji = ':thumbsdown:'
            if (how_gay == 100) emoji = ':rainbow_flag: SUPER GAY'
            
            const embed = new MessageEmbed()
            .setAuthor(`How gay is ${target.user.username}?`, target_avatar)
            .setDescription(`${target.user.username} is ${how_gay}% gay! ${emoji}`)
            .setFooter(`Requested by ${message.author.username}`, message_author_avatar)
            .setImage(bar_image_link)

            message.channel.send(embed)
        } catch (err) {
            message.channel.send('```diff\n-Cannot read property \'user\' of undefined-\n```')
            message.channel.send('Make sure you\'re entering a real username.')

            console.error(err)
        } finally {
            console.log('Running command \'gayrate\'')
        }
    }
}