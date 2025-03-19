const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    message.channel.send(`Minha net ta em: ${parseInt(bot.ws.ping)} `)


}

exports.help = {
    name: 'ping'
}