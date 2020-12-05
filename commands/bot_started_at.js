var currentdate = new Date()

module.exports = {
    commands: 'bot_started_at',
    minArgs: 0,
    maxArgs: 0,
    callback: (message) => {
        try {
            const datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1) + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds()
            message.channel.send(datetime)    
        } catch (err) {
            message.channel.send('Error getting date')
            throw new Error(err)
        } finally {
            console.log('Running \'botstartedat\'')
        }
    }
}