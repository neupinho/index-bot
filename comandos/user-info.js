const Discord = require('discord.js'); 
const moment = require("moment"); 
moment.locale('pt-BR') 


const status = { 
    online: "Disponivel", 
    idle: "Ausente",       
    dnd: "Ocupado", 
    offline: "Offline" 
};
exports.run = (bot, message, args) => { 

    var permissions = []; 
    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
   
   const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    
   
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Expulsar membros");
    }
    
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Banir membros");
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrador");
    }

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Gerenciar mensagens");
    }
    
    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Gerenciar canais");
    }
  
    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Gerenciar apelidos");
    }

    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Gerenciar cargos");
    }

    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Gerenciar webhooks");
    }

    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Gerenciar emojis");
    }

    if(permissions.length == 0){ 
        permissions.push("Nenhuma permissão detectada");
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor(`${member.user.username}`, member.user.displayAvatarURL)
        .setColor('#0000')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Entrou aqui em',`\`${moment(member.joinedAt).format("LLL")}\``)
        .addField("Conta criada em",`\`${moment(member.user.createdAt).format("LLL")}\``, true)
        //.addField("Permissões", `${permissions.join(', ')}`)

    message.channel.send({embed}).then(msg => { 
        msg.react("👉")
 
        
        let filtro = (reaction, usuario) => reaction.emoji.name === "👉" && usuario.id === message.author.id;
        
        let coletor = msg.createReactionCollector(filtro);

        coletor.on("collect", c => { 
            c.remove(message.author.id); 

            let emb = new Discord.MessageEmbed()

            //.addField("Jogando", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Nenhum jogo detectado"}`)
            .addField("Status",`${status[member.user.presence.status]}`)
            .addField("Tag", `#${member.user.discriminator}`)
            .addField("ID", `${member.user.id}`)
            .setThumbnail(member.user.displayAvatarURL())
            .setColor('#0000')

            msg.edit(emb).then(m => { 
                m.react("👈")
                
                let filter = (reaction, user) => reaction.emoji.name === "👈" && user.id === message.author.id;
                let coleter = m.createReactionCollector(filter);

                coleter.on("collect", e => {
                    e.remove(message.author.id);
                    m.edit(embed) 
             })
           })
        })
    })
}

exports.help = { 
    name: 'userinfo'
}