const Discord = require('discord.js')
const random_puppy = require('random-puppy')

module.exports = {
    commands: 'meme',
    minArgs: 0,
    maxArgs: 0,
    callback: async message => {
        const subreddits = ["meme", "me_irl", "photoshopbattles", "crappyoffbrands", "PerfectTiming", "BrandNewSentence"]
        const random = subreddits[Math.floor(Math.random() * subreddits.length)]
        const img = await random_puppy(random)
        const message_author_avatar = message.author.avatarURL()

        const embed = new Discord.MessageEmbed()
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`http://reddit.com/${random}`)
        .setFooter(`Requested by ${message.author.username}`, message_author_avatar)

        message.channel.send(embed)
    }
}