const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    commands: ['uwuify', 'uwu'],
    expectedArgs: '<text>',
    minArgs: 1,
    maxArgs: 99999,
    callback: message => {
        try {
            function Uwuify(str) {
            return str
                .replace(/@/g, '')
                .replace(/(?:r|l)/g, 'w')
                .replace(/(?:R|L)/g, 'W')
                .replace(/th([aeiou])/g, 'd$1')
                .replace(/Th([aeiou])/g, 'D$1')
                .replace(/TH([AEIOU])/g, 'D$1')
                .replace(/th([AEIOU])/g, 'd$1')
                .replace(/n([aeiou])/g, 'ny$1')
                .replace(/N([aeiou])/g, 'Ny$1')
                .replace(/N([AEIOU])/g, 'NY$1')
                .replace(/n([AEIOU])/g, 'nY$1')
                .replace(/([a-z])o([a-z])/g, '$1owo$2')
                .replace(/([A-Z])o([a-z])/g, '$1owo$2')
                .replace(/([A-Z])O([A-Z])/g, '$1OWO$2')
                .replace(/([a-z])O([A-Z])/g, '$1OWO$2')
                .replace(/ove/g, 'uv')
            }

            const message_author_avatar = message.author.avatarURL()
            const text = message.content.split(' ').slice(1).join(' ')
            const temp_uwuized_message = Uwuify(text)

            if (temp_uwuized_message.length > 2000) {
                fs.writeFile('uwuify.txt', Uwuify(text), (err) => {
                    if (err) throw new Error(err)
                })

                return message.channel.send(
                    'Your string was too long, so I made a file containing your uwu-ified text for you!', {
                    files: [
                        {
                        attachment: 'C:\\Users\\Administrator\\Desktop\\CODING\\RoboSynth\\uwuify.txt',
                        name: 'uwuify.txt'
                        }]
                })

            }

            const embed = new Discord.MessageEmbed()
            .setTitle('UwU-ified Message')
            .setDescription(`${Uwuify(text)}`)
            .setFooter(`Wequested by ${message.author.username}`, message_author_avatar)
            
            message.channel.send(embed)
        } catch (err) {
            message.channel.send('Error uwu-ifying your message! Sowwy ;-;')
            throw new Error(err)
        } finally {
            console.log('Running command \'uwuify\'')
        }
    }
}