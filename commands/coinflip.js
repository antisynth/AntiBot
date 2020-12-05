module.exports = {
    commands: ['coinflip', 'flipcoin'],
    minArgs: 0,
    maxArgs: 0,
    callback: message => {
        try {
            message.channel.send('Flipping coin...').then((result_message) => {
                setTimeout(function(){result_message.edit(Math.random() > 0.5 ? "Heads!" : "Tails!")}, 100)
            })
        } catch (err) {
            message.channel.send('Dropped and lost the coin!')
            throw new Error(err)
        } finally {
            console.log('Running command \'coinflip\'')
        }
    }
}