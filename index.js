const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    console.log(`Comando ${f} inicou com sucesso`)
    bot.commands.set(props.help.name, props);
  });
});


bot.on('ready', () => {

  console.log(`Bot foi iniciado com sucesso`);

  var tabela = [
    { name: 'Minecraft', type: 'PLAYING' },
    { name: 'Eu sou hacki', type: 'LISTENING' },
    { name: 'videos normais', type: 'WATCHING' },
    { name: `${bot.guilds.cache.size} servidores, ${bot.users.cache.size} usuários e ${bot.channels.cache.size} canais`, type: 'WATCHING' },
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    bot.user.setActivity(altstatus)
  }
  setStatus();
  setInterval(() => setStatus(), 5000)


});


bot.on("guildMemberAdd", async member => {

  let guild = bot.guilds.cache.get("744230297012273333");
  let channel = bot.channels.cache.get("744230297012273336");

  if (guild != member.guild) {
    return console.log('sai daqui que tu não é do servidor suporte')
  } else {

    let embed = new Discord.MessageEmbed()
      .setColor('#03ff1c')
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(` Seja Bem-vindo ao ${guild.name}`)
      .setImage('https://cdn.discordapp.com/icons/744230297012273333/c868310f59fdbc6ed4af6fd2030c8c1f.webp?size=2048')
      .setDescription(`${member.user}, bem vindo ao ${guild.name}, espero que se sinta bem aqui, agora estamos com ${member.guild.memberCount} membros no nosso servidor `)
      .addField('canais', 'siga as nossas regras')
      .addField(`ID do Usuário`, `${member.user.id}`)
      .setFooter('Créditos @Asturiano#1783')
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();

    await channel.send(embed)
  }

})

bot.on("guildMemberRemove", async member => {

  let guild = bot.guilds.cache.get("744230297012273333");
  let channel = bot.channels.cache.get("744230297012273336")

  if (guild != member.guild) {
    return console.log('pode ir embora')
  } else {

    let embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Adeus ;c`)
      .setImage('https://cdn.discordapp.com/attachments/712151172395302942/728049974880895028/aa.jpg?size=2048')
      .setDescription(`${member.user} saiu do ${guild.name}, ele deve ter sido uma boa pessoa, agora estamos com ${member.guild.memberCount} membros no nosso servidor `)
      .addField('infelismente', 'press F, to respect')
      .setFooter('ID do Usuário: ' + member.user.id)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setTimestamp();

    await channel.send(embed)
  }

})

bot.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.channel.id === "716425316729356298") {
    if (message.content.startsWith(`${config.prefix}`)) {
      return message.reply(`meus comandos nao funcionam nesse canal!`)
    }
  }

  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let arquivocmd = bot.commands.get(command.slice(prefix.length));
  if (arquivocmd) arquivocmd.run(bot, message, args);
});

bot.login(config.token);
