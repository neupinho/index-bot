const Discord = require('discord.js'); 

exports.run = (bot, message, args) => { 

  var replies = ["Sim", "Não", "isso não é pergunta que se faça", "não sei", "sla", "não sou obrigado a responder isso", "provavelmente sim", "provavelmente não", "com certeza", "lógico que não né", "Bem, neste caso, infelizmente a minha resposta, claro, sem o desejo de ofender os que pensam diferente, é não.", "Após uma longa pesquisa, na minha humilde opinião, claro, sem o desejo de ofender os que pensam diferente - o meu ponto de vista, analisando com um pouco mais de profundidade, sem o intuito de esclarecer tudo, considerando as características de cada um, a resposta é sim"]; 
    var result = Math.floor((Math.random() * replies.length)); 
    
    var duvida = args.slice(0).join(" "); 
    if (!duvida) return message.reply(`pergunto algo por favor!`)
  
    let embed = new Discord.MessageEmbed()
    
    .setColor('YELLOW')
    .addField(`__**Pergunta**__`, `${duvida}`)
    .addField(`__**Resposta**__`, `${replies [result]}`)
    
    message.channel.send(embed)
}

exports.help = { 
    name: 'pergunta'
}