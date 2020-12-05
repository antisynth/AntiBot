var { MessageEmbed } = require('discord.js')
var { prefix } = require('../config.json')

module.exports = {
    commands: '8ball',
    minArgs: 1,
    maxArgs: 50,
    expectedArgs: '<question>',
    callback: (message) => {
        try {
            const question = message.content.replace(`${prefix}8ball `, '')
            const message_author_avatar = message.author.avatarURL()
            const magic_8ball_image = 'https://i.imgur.com/PzMDC81.png'

            const responses = [
                "It is certain.",
                "It is decidedly so.",
                "Without a doubt.",
                "Yes - definitely.",
                "You may rely on it.",
                "As I see it, yes.",
                "Most likely.",
                "Outlook good.",
                "Yes.",
                "Signs point to yes.",
                "Reply hazy, try again.",
                "Ask again later.",
                "Better not tell you now.",
                "Cannot predict now.",
                "Concentrate and ask again.",
                "Don't count on it.",
                "My reply is no.",
                "My sources say no.",
                "Outlook not so good.",
                "Very doubtful.",
            ]
            const random_index = responses[Math.floor(Math.random()*(responses.length)-1)]

            const embed = new MessageEmbed()
            .setTitle('Magic 8ball')
            .setDescription(`Question: ${question}\nAnswer: ${random_index}`)
            .setImage(magic_8ball_image)
            .setFooter(`Requested by ${message.author.username}`, message_author_avatar)

            message.channel.send(embed)
        } catch (err) {
            message.channel.send('Error while magically predicting your answer')
            throw new Error(err)
        } finally {
            console.log('Running command \'8ball\'')
        }
    }
}