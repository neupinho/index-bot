const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    let member = message.mentions.users.first() || message.author;
 
    let embed = new Discord.MessageEmbed()
 
    .setColor('#ff05ea')
    .setTitle('link para download')
    .setURL(member.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
    .setImage(member.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
 
    message.reply(embed)
 
}
 
exports.help = {
    name: 'avatar'
}