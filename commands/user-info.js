const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    commands: ['user-info', 'userinfo', 'user', 'whois'],
    expectedArgs: '<user>',
    minArgs: 1,
    maxArgs: 50,
    callback: async (message, args) => {
        let target = message.mentions.members.first() || 
            message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(" ").toLowerCase()) ||
            message.guild.members.cache.get(args[0]) || 
            message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase())
            
        try {
            let avatar = target.user.avatarURL()  
            let message_author_avatarURL = message.author.avatarURL()
            let nick = target.displayName
            if (nick === target.user.username) nick = 'No nickname'
            const embed = new Discord.MessageEmbed()
            .setTitle(`User info for ${target.user.username}`)
            .setDescription(`<@${target.user.id}>`)
            .setThumbnail(avatar)
            .setFooter(`Requested by ${message.author.tag}`, message_author_avatarURL)
            .addFields(
                {
                    name: 'Tag',
                    value: target.user.tag,
                    inline: true,
                },
                {
                    name: 'ID',
                    value: target.user.id,
                    inline: true,
                },
                {
                    name: 'Joined server',
                    value: moment(target.joinedAt).format('LLLL'),
                    inline: false,
                },
                {
                    name: 'Joined Discord',
                    value: moment(target.user.createdAt).format('LLLL'),
                    inline: true,
                },
                {
                    name: 'Human?',
                    value: target.user.bot ? 'No, they\'re a program.' : 'Yes, they\'re a human. (Maybe.)',
                    inline: true,
                },
                {
                    name: 'Nickname',
                    value: nick,
                    inline: true,
                }
            )
            message.channel.send(embed)
        } catch (Exception) {
            message.channel.send('```diff\n-Cannot read property \'user\' of undefined-\n```')
            message.channel.send('Make sure you\'re entering a real username.')
            throw new Error(Exception)
        }
    }
}
