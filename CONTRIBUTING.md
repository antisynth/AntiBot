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
## Creating issues
### Format
 Command syntax  
 What the command does  
 Why should this be added  
 Examples  
 #### Command syntax
  Show me what the valid command syntax looks like by entering the command name, followed by any arguments the command needs.  
  An example of this would be:  
   "!say text"  
  Don't surround your arguments with <>, because markdown is weird and just deletes anything inside of those.
 #### What the command does
  Make sure your description of what the command does is at least somewhat detailed.  
  An example of this would be:  
   "The user can input whatever they want after !say, and then the bot will delete the message when the command is executed and repeats what the user inputted in another message."
 #### Why should this be added
  Tell me what purpose your issue serves. Why is it a good addition to the bot? Is it useful (if it's a fun command ignore this)?  
  An example of this would be:  
   "This command serves the purpose of funny screenshots. It is a good addition to the bot because if someone is bored and wants to laugh, they can make the bot say funny stuff and entertain them. It's not useful, but that's fine because this is a fun command."
 #### Examples
  If your issue isn't about adding a new command, you can probably ignore this.  
  Else, add some text (or images) demonstrating how this command works in practice.  
  An example of this would be:  
   "Example of the say command:  
   !say Hello, World!  
   *Command message gets deleted.*  
   Bot: Hello, World!". Once that's done,
 **Congrats! You've just made an issue that I'll consider!**
# Fin
