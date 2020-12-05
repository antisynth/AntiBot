const Canvas = require('canvas')
const { MessageAttachment } = require('discord.js')
const path = require('path')
const { prefix } = require('../config.json')

module.exports = (bot) = {
    commands: 'suntzu',
    minArgs: 1,
    maxArgs: 99999,
    expectedArgs: '<text>',
    callback: async message => {
        try {
            const canvas = Canvas.createCanvas(801, 447)
            const ctx = canvas.getContext('2d')

            const background = await Canvas.loadImage(
                path.join(__dirname, '../wallpaper.jpg')
            )
            let x = 0
            let y = 0
            ctx.drawImage(background, x, y)

            ctx.fillStyle = '#ffffff'
            let text = message.content.replace(`${prefix}suntzu `, '"')
            ctx.font = '30px sans-serif'
            x = canvas.width / 2 - ctx.measureText(text).width / 2
            text += '"'
            if (text.length > 30) {
                text = [...text]
                text[36] = text[36] + '\n'
                text = text.join('')
            }
            if (text.length > 60) {
                text = [...text]
                text[66] = text[66] + '\n'
                text = text.join('')
            }
            if (text.length > 90) {
                text = [...text]
                text[96] = text[96] + '\n'
                text = text.join('')
            }
            if (text.length > 120) {
                text = [...text]
                text[126] = text[126] + '\n'
                text = text.join('')
            }
            if (text.length > 150) {
                text = [...text]
                text[156] = text[156] + '\n'
                text = text.join('')
            }
            if (text.length > 180) {
                text = [...text]
                text[186] = text[186] + '\n'
                text = text.join('')
            }
            if (text.length > 210) {
                text = [...text]
                text[216] = text[216] + '\n'
                text = text.join('')
            }
            if (text.length > 240) {
                text = [...text]
                text[246] = text[246] + '\n'
                text = text.join('')
            }
            if (text.length > 270) {
                text = [...text]
                text[276] = text[276] + '\n'
                text = text.join('')
            }
            if (text.length > 300) {
                text = [...text]
                text[306] = text[306] + '\n'
                text = text.join('')
            }
            if (text.includes('undefined')) text.replace('undefined', ' ')
            ctx.fillText(text, 250, 50 + 90)
            ctx.font = '35px sans-serif'
            ctx.fillText('- Sun Tzu, The Art of War', 250, 300 + 20)

            const attachment = new MessageAttachment(canvas.toBuffer())
            message.channel.send(
                '',
                attachment
                )
        } catch (err) {
            message.channel.send('Error while loading canvas image')
            throw new Error(err)
        } finally {
            console.log('Running command \'suntzu\'')
        }
    }
}