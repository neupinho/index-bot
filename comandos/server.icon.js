const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    let embed = new Discord.MessageEmbed()
 
    .setColor('PINK')
    .setTitle(`${message.guild.name}`)
    .setDescription("[Link para baixar a imagem](" + message.guild.iconURL() + ")")
    .setImage(`${message.guild.iconURL({size: 2048})}`)
 
    message.reply(embed)
 
}
 
exports.help = {
    name: 'servericon'
}