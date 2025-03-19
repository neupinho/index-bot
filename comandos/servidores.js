const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var servidores = client.guilds.cache.map(a => a.name)

const embed = new Discord.MessageEmbed()
.setAuthor('Servidores!')
.setDescription(servidores)

message.channel.send(embed)
}

exports.help = {
    name: 'servidores'
}