const Discord = require('discord.js'); 

exports.run = (bot, message, args) => { 
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`você precisa da permissão \`MANAGE_MESSAGES\`.`); 
    let clean = args.slice(0).join(' '); 
 
    if (clean < 2 || clean > 100) return message.reply(`um número de: \`2 à 100\` por favor!`)
    
    if (args.length === 0) return message.reply(`um número de: \`2 à 100\` por favor!`) 
    try { 
        message.channel.bulkDelete(clean) 
        
        let embed = new Discord.MessageEmbed()

        .setTitle(`VARREDURA`)
        .setDescription(`Chat varrido, eu varri \`${clean}\` mensagens.`)
        .setColor('#f5f9fa')
        .setFooter(`Responsável: ${message.author.username}`)

        message.channel.send(embed)
    } catch(e){ 
        console.log(e); 
    }
}

exports.help = { 
    name: 'clear'
}