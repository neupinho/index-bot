const Discord = require('discord.js');

exports.run = (bot, message, args) => {

if (!message.member.hasPermission("SEND_MESSAGES")) return message.reply(`você está mutado meu caro`)

    var fala = args.slice(0).join(' ');
    if (!fala) return message.reply(`escreva algo pow 😉!`)
  
    let embed = new Discord.MessageEmbed()
    
    .setDescription(fala)
    
    message.channel.send(fala)
    message.delete()

}

exports.help = {
    name: 'falar'
}