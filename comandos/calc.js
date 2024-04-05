const Discord = require('discord.js'); 
const math = require('mathjs'); 
const ms = require('ms'); 

exports.run = async (bot, message, args) => { 

    var conta = args.slice(0).join(' ');
    if (!conta) return message.reply('escreva uma conta! Ex.: \`!calc 2 + 2\`') 
                         
   message.channel.send(`Resultado de \`${conta}\` é: \`${math.evaluate(args.join(' '))}\``)
}

exports.help = { 
  name: 'calc'
}
