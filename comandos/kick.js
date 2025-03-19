const Discord = require('discord.js'); 

exports.run = async (bot, message, args) => { 

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("permissões insuficientes!") 

    let member = message.mentions.members.first() 
    if (!member) return message.reply("selecione uma pessoa!") 
    if (!member.bannable) return message.reply("não é possível punir este usuário.") 
    let reason = args.slice(1).join(' ') 
    if (!reason) reason = "Nenhuma razão fornecida" 
    await member.kick(reason) 
      .catch(error => message.reply(`${message.author}, não foi possível completar esta punição devido ao erro: ${error}`)) 

      let pEmbed = new Discord.MessageEmbed()
          .setTitle("EXPULSAMENTO")
          .addField("Usuário:", member.user.tag)
          .addField("Staff responsável:", message.author.tag)
          .addField("Motivo:", reason)
          .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("DARK_RED")

          message.channel.send(pEmbed)
          
}

exports.help = { 
    name: 'kick'
}