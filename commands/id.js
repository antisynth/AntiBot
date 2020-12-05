const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['id', 'getid'],
    minArgs: 0,
    maxArgs: 1,
    expectedArgs: '<user>',
    callback: (message, args) => {
        const message_author_avatar = message.author.avatarURL()

        const no_target_embed = new MessageEmbed()
        .setTitle('Current channel ID')
        .setDescription(message.channel.id)
        .setFooter(`Requested by ${message.author.username}`, message_author_avatar)

        let target = message.mentions.members.first() || 
            message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || 
            message.guild.members.cache.get(args[0]) || 
            message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())

        if (!target) return message.channel.send(no_target_embed)

        const target_avatar = target.user.avatarURL()

        const embed = new MessageEmbed()
        .setAuthor(`${target.user.username}'s ID`, target_avatar)
        .setDescription(target.user.id)
        .setFooter(`Requested by ${message.author.username}`, message_author_avatar)
        message.channel.send(embed)
    }
}