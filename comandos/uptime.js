const Discord = require('discord.js'); 

exports.run = (bot, message, args) => { 

let dias = 0; 
let week = 0;  
 
 let uptime = ``; 
 let totalSegundos = (bot.uptime / 1000); 
 let horas = Math.floor(totalSegundos / 3600); 
 totalSegundos %= 3600; 
 let minutos = Math.floor(totalSegundos / 60); 
 let segundos = Math.floor(totalSegundos % 60); 

 if (horas > 23){ 
     dias = dias + 1; 
     horas = 0; 
 }

 if (dias == 7){  
     dias = 0; 
     week = week + 1;  
 }

 if (week > 0){ 
     uptime += `${week} week, `;
 }

 if (minutos > 60){ 
     minutos = 0; 
 }

 uptime += `\`${horas}h ${minutos}m ${segundos}s\``; 

 message.channel.send(`Eu estou acordado há COF COF: ${uptime}`)

}

exports.help = { 
    name: 'ontime' 
}