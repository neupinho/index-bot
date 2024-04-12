const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {

  if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
        return message.reply("Eu não tenho a permissão necessária!")
      }
 
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.reply(`mencione um usuario! ex.: d!ban @membro [motivo]`)
    if (membro === message.member) return message.reply(`vc nao pode banir vc mesmo.`)

    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`escreva o motivo! ex.: d!ban @membro [motivo]`)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`vc precisa da permissao **Banir Membros**.`)
 
    var canal = bot.channels.cache.get("737515330867298334");
 
    message.channel.send(`opa, vc realmente deseja punir esse usuario?`).then(msg => {
        msg.react("👍")
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id);
            message.channel.send(`**MEMBRO PUNIDO**\n\nMembro: \`${membro.user.username}\`\nMotivo: **${motivo}**`)
            membro.ban();
        })
    })
}
 
exports.help = {
    name: 'ban'
}
