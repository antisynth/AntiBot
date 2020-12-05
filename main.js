const Discord = require('discord.js')
const path = require('path')
const fs = require('fs')
const EventEmitter = require('events')

const current_date = new Date()
const bot = new Discord.Client()

global.bot = bot
EventEmitter.defaultMaxListeners = 50

const { token } = require('./realconfig.json')
const { dependencies } = require('./package-lock.json')

bot.on('ready', () => {
    on_start()
})

function on_start() {
    console.clear()
    console.log(`discord.js version: ${dependencies["discord.js"].version}`)

    const datetime = current_date.getDate() + "/"
        + (current_date.getMonth()+1) + "/"
        + current_date.getFullYear() + " @ "
        + current_date.getHours() + ":"
        + current_date.getMinutes() + ":"
        + current_date.getSeconds()
    console.log(`Bot online; started at: ${datetime}`)

    const base_file = 'command-base.js'
    const command_base = require(`./commands/${base_file}`)

    const read_commands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                read_commands(path.join(dir, file))
            } else if (file !== base_file) {
                const option = require(path.join(__dirname, dir, file))
                command_base(bot, option)
            }
        }
    }

    read_commands('commands')
}

bot.login(token)