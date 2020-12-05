# Contributing
## Adding commands
### Adding new commands
All of the bot's commands are seperate JavaScript files found in [AntiBot/commands/](https://github.com/antisynth/AntiBot/tree/main/commands).
The file can be called whatever as long as you define `commands: ` in the file to the actual name of the command, but it's definitely a lot easier if the file's name is the name of the command.
#### Necessary keys
 * `commands:` - The name you have to input to execute the command. PROTIP! You can add aliases by making `commands:` a string array, like `commands: ['e', 'f']`.
 * `callback:` - The code that's run when the command is executed. Normally written as an arrow function, with message as a parameter. (`callback: (message) => {}`)
#### Optional, but commonly used keys
 ##### Arguments
  * `minArgs:` - The minimum amount of arguments needed when inputting the command for the bot to not send a syntax error. Type: integer (`minArgs: 0`)
  * `maxArgs:` - The maximum amount of arguments the user can input until the bot sends a syntax error. Type: integer (`maxArgs: 99`)
  * `expectedArgs:` - Needed if you're using any arguments in your command. This is what the bot sends in the syntax error. Type: string (`expectedArgs: '<user>'`)
 ##### Permissions
  * `permissions:` - User permission(s) needed to run a command. Type: string array (`permissions: ['MANAGE_NICKNAMES']`)
  * `requiredRoles:` - Role(s) the user needs to have to run a command. Type: string array (`requiredRoles: ['Gamer']`)
  * `permissionError:` - Not necessary, but if you need a special permission error message, use this. Type: string (`permissionError: 'You can\'t run this you need admin'`)
#### Example command
 ```js
 module.exports = {
  commands: 'ping',
  minArgs: 0,
  maxArgs: 999,
  expectedArgs: 'this won\'t ever get sent because there's 0 minArgs!',
  permissionError: 'You need to be able to send messages and read message history to use this command!',
  callback: message => {
   message.reply('pong!')
  },
  permissions: [
   'SEND_MESSAGES',
   'READ_MESSAGE_HISTORY'
  ],
  requiredRoles: ['Ping pong'],
 }
 ```
