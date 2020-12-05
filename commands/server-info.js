var dateFormat = require('dateformat')
var Discord = require('discord.js')
var date = new Date()
dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM:ss TT')

module.exports = {
    commands: ['serverinfo', 'server-info', 'server'],
    minArgs: 0,
    maxArgs: 0,
    callback: async (message) => {
        try {
            const millis = new Date().getTime() - message.guild.createdAt.getTime()
            const days = millis / 1000 / 60 / 60 / 24

            let verification_level = message.guild.verificationLevel
            if (verification_level === 'NONE') verification_level = 'None, no restrictions'
            if (verification_level === 'LOW') verification_level = 'Low, needs a verified email'
            if (verification_level === 'MEDIUM') verification_level = 'Medium, have to be registered on Discord for 5 minutes before joining'
            if (verification_level === 'HIGH') verification_level = 'High, must be in the server for 10 minutes'
            if (verification_level === 'VERY_HIGH') verification_level = 'Highest, must have a verified phone on their Discord'
            const owner = message.guild.owner.user || {}
            const roles = message.guild.roles.cache.size
            const server_icon = message.guild.iconURL()
            const author_avatar = message.author.avatarURL()
            
            const embed = new Discord.MessageEmbed()
            .setTitle(`All about "${message.guild.name}"`)
            .setThumbnail(server_icon)
            .setFooter(`Requested by ${message.author.tag}`, author_avatar)
            .setDescription(server_icon)
            .addField('Server ID', message.guild.id, true)
            .addField('Owner', owner.tag || 'Error while trying to fetch the server owner', true)
            .addField('Owner ID', owner.id || 'Error while trying to fetch the server owner\'s ID', true)
            .addField('Created at', `${dateFormat(message.guild.createdAt)}`, true)
            .addField('Days since creation', `${days.toFixed(0)}`, true)
            .addField('Region', `${message.guild.region}`, true)
            .addField('Verification level', `${verification_level}`, true)
            .addField('Total text channel count', `${message.guild.channels.cache.filter(m => m.type === 'text').size}`, true)
            .addField('Total voice channel count', `${message.guild.channels.cache.filter(m => m.type === 'voice').size}`, true)
            .addField('Member count', `${message.guild.memberCount}`, true)
            .addField('Role count (excluding @everyone)', `${roles - 1}`, true)
            message.channel.send(embed)
        } catch (err) {
            message.channel.send('```diff\n-Cannot read property \'author\' of undefined\n```-')
            message.channel.send('Send this error to antisynth')
            throw new Error(err)
        } finally {
            console.log('Running command \'serverinfo\'')
        }
    }
}