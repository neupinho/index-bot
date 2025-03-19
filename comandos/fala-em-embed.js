const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Só os ADM`)

    var arg = args.slice(0).join(' ');
    if (!arg) return message.reply(`escreva algo pow 😉!`)
  
    let embed = new Discord.MessageEmbed()
    
    .setDescription(arg)
    
    message.channel.send(embed)
    message.delete()

}

exports.help = {
    name: 'faladecorativa'
}