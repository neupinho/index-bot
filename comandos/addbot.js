const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    let member = message.mentions.users.first() || message.author;
 
    let embed = new Discord.MessageEmbed()
 
    .setColor('#ff05ea')
    .setTitle(`Clique aqui para me adicionar`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=695336978203541676&scope=bot&permissions=8`)
 
    message.reply(embed)
 
}
 
exports.help = {
    name: 'addbot'
}
