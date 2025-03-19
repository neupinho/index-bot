const Discord = require('discord.js'); 
const moment = require('moment');
moment.locale('pt-BR')

exports.run = (bot, message, args) => {

let embed = new Discord.MessageEmbed()
    .setAuthor(`Biografia`, bot.user.displayAvatarURL())
    .setColor('GOLD')
    .setThumbnail(bot.user.displayAvatarURL())
    .addField(`**Fundador**`, `<@380413445285347351>`, true)
    .addField(`**Foi criado em**`, `2 de Abril de 2020 às 18:20`, true)
    .addField(`**oque é**`, `é um bot simples de moderação, ultilidade e diversão`, true)
    .addField(`**Usuários, canais e servidores**`, `Estou em ${bot.guilds.cache.size} servidores, ${bot.users.cache.size} usuários e ${bot.channels.cache.size} canais`, true) 
    .addField(`Minha family`, `meu pai como já falei é o <@380413445285347351>, meu tio é o <@246361293278150658>, meu primo é o <@722577563758755942>, esses são os que mais amo ❤ `)
    .addField(`**ID do bot**`, `695336978203541676`, true)

    message.channel.send(embed)
}
exports.help = { 
    name: 'botinfo'
}