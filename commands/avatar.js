const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['avatar', 'getpfp', 'pfp'],
    minArgs: 0,
    maxArgs: 50,
    expectedArgs: '<user>',
    callback: (message, args) => {
        try {
            const target = message.mentions.members.first() || 
                message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) || 
                message.guild.members.cache.get(args[0]) || 
                message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
            const target_avatarURL = target.user.avatarURL()
            const message_author_avatarURL = message.author.avatarURL()
            
            const embed = new MessageEmbed()
            .setTitle(`Avatar for ${target.user.username}`)
            .setImage(target_avatarURL)
            .setFooter(`Requested by ${message.author.username}`, message_author_avatarURL)

            message.channel.send(embed)
        } catch (err) {
            message.channel.send('```diff\n-Cannot read property \'user\' of undefined-\n```')
            message.channel.send('Make sure you\'re entering a real username.')
            
            console.error(err)
        } finally {
            console.log('Running command \'avatar\'')
        }
    }
}