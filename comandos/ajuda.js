const Discord = require('discord.js'); 

exports.run = (client, message, args) => { 

    message.reply('verifique suas mensagens privadas...')


    let embed = new Discord.MessageEmbed()
        .setTitle(`CENTRAL DE AJUDA!`)
        .setColor("GOLD")
        .setDescription('Para ter mais acesso e facilidade aos nossos comandos, reaja com algum emoji e receba as informações necessárias. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
    message.author.send({embed}).then(msg => { 
            msg.react('🔨').then(r => { 
            msg.react('🔧').then(r => { 
            msg.react('💳').then(r => { 
            msg.react('🔙').then(r => { 
            
        })
      })
    })
 })
        
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user, ) => reaction.emoji.name === '💳' && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.name === '🔙' && user.id === message.author.id;
         
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Back = msg.createReactionCollector(BackFilter);
 
        Utilidades.on('collect', r2 => { 
            embed = new Discord.MessageEmbed()
                .setTitle("🔧 Uteis")
                .addField(`\`s!ontime\``, `Veja a quanto tempo o bot se encontra online`)
                .addField(`\`s!userinfo\``, `Confira algumas informações de um membro`)
                .addField(`\`s!calc\``, `use a calculadora`)
                .addField(`\`s!serverinfo\``, `veja o servidor onde ultilizou o comando`)
                .addField(`\`s!servericon\``, `roube a imagem do servidor`)
                .addField(`\`s!clima\``, `veja o clima de qualquer lugar do mundo`)
                .addField(`\`s!avatar\``, `veja a foto de perfil de alguem`)
                .addField(`\`s!botinfo\``, `veja informações sobre o bot`)
                .addField(`\`s!addbot\``, `me adicione ;D`)
                .addField(`\`s!ping\``, `veja a lentidão do bot`)
                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("👮 Moderação")
                .addField(`\`s!ban\``, `banir uma pessoa`)
                .addField(`\`s!unban\``, `desbanir uma pessoa (fazer de teste, se ser algum bug ou erro consulte o Darwin.js#8467) `)
                .addField(`\`s!clear\``, `faça faxina no canal`)
                .addField(`\`s!kick\``, `expulsar o membro sem permanencia, ele poderá voltar se convidarem ele`)
                .addField(`\`s!faladecorativa\``, `mande o bot falar em embed`)
                .setColor("GOLD")
            msg.edit(embed);
        })
 
        Entretenimento.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
                .setTitle("💳 Entretenimento")
                .addField(`\`d!lgbtq+\``, `veja se você é lgbtq+ ou não`)
                .addField(`\`d!pergunta\``, `Pergunte algo ao mais inteligente do mundo`)
                .addField(`\`d!falar\``, `mande o bot falar`)
                .addField(`\`d!dog\``, `ooowwwww, um totó`)
                .addField(`\`d!bigtext\``, `faça uma arte usando emoji de letras`)
                .addField(`\`d!asciit\``, `faça uma arte usando segmentos de reta`)
                .addField(`\`d!roleta\``, `você deve saber oque é :v`)
                .setColor("GOLD")

            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            embed = new Discord.MessageEmbed()
            .setTitle(`CENTRAL DE AJUDA!`)
            .setColor("GOLD")
            .setDescription('Para ter mais acesso e facilidade aos nossos comandos, reaja com algum emoji e receba as informações necessárias. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
            
           msg.edit(embed);  
        });
    });
}
exports.help = { 
    name: "ajuda"
}
