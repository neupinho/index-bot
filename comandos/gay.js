const Discord = require('discord.js'); 

exports.run = (bot, message, args) => { 

    var replies = ["você é ``⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜`` 10% lgbtq+", "você é ``⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜`` 20% lgbtq+", "você é ``⬛⬛⬛⬜⬜⬜⬜⬜⬜`` 30% lgbtq+", "você é ``⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜`` 40% lgbtq+", "você é ``⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜`` 50% lgbtq+", "você é ``⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜`` 60% lgbtq+", "você é ``⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜`` 70% lgbtq+", "você é ``⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜`` 80% lgbtq+", "você é ``⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜`` 90% lgbtq+", "você é ``⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛`` 100% lgbtq+, já foi para alguma parada?"]; 
    var result = Math.floor((Math.random() * replies.length)); 
  
    let embed = new Discord.MessageEmbed()
    
    .setColor('YELLOW')
    .addField(`Você é...`, `${replies [result]}`)
    
    message.channel.send(embed)
}

exports.help = { 
    name: 'lgbtq+'
}