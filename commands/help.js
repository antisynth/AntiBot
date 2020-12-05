const { MessageEmbed } = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    commands: 'help',
    minArgs: 0,
    maxArgs: 0,
    callback: (message) => {
        const embed = new MessageEmbed()
        .setTitle('Commands')
        .setDescription(
            `${prefix}**server-info** - Shows you some information about the server the command is in. Aliases: ${prefix}**serverinfo**, ${prefix}**server**
            ${prefix}**user-info** <user> | <@user> | <userid> - Shows you a bunch of information about a user. Aliases: ${prefix}**userinfo**, ${prefix}**user**
            ${prefix}**help** - Shows you all of the commands, you're looking at it right now!
            ${prefix}**status** <letters> - Sets the bots status to whatever you want. (Owner-Only command)
            ${prefix}**restart** - Destroys the client and re-logs-in 5 times. (It doesn't work tho, also owner-only command)
            ${prefix}**bot_started_at** - Shows you when the bot was last started in MST/MDT time.
            ${prefix}**gayrate** <user> | <@user> | <userid> - Random generates how gay someone is with some fancy flags. Aliases: ${prefix}**howgay**
            ${prefix}**ping** - Return client and api pong. Aliases: ${prefix}**latency**
            ${prefix}**8ball** <question> - Let complete random generation answer your query.
            ${prefix}**avatar** <user> - Get avatar of user entered. Aliases: ${prefix}**getpfp**, ${prefix}**pfp**
            ${prefix}**meme** - Make API fetch random meme from reddit for you and send it in an embed.
            ${prefix}**suntzu** - Make a fake Sun Tzu quote.
            ${prefix}**uwuify** - Make messages unbearable. Aliases: ${prefix}**uwu**
            ${prefix}**rate** - Random generate rating of user you enter.
            ${prefix}**id** - Get current channel id or user id. Aliases: ${prefix}**getid**
            ${prefix}**connectfour** <user> - Play connect four against someone with reactions.
            ${prefix}**snake** - Play snake with reactions.`
        )
        message.channel.send(embed)
        console.log('Running \'help\'')
    }
}