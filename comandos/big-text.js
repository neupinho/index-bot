const discord = require('discord.js'); 
const num_conv = require('number-to-words'); 

exports.run = async (bot, message, args) => { 
    let output = args.join(' '); 
    if (!output) 
        return message.reply(`utilize: \`s!bigtext <texto>\`. Ex.: \`s!bigtext sua irmã\``)

    let bigtext_arr = new Array(); 
    for (let i = 0; i < output.length; i++) {  
        let isnumber = await parseInt(output[i]); 
        if (isnumber >= 0 && isnumber <= 9) 
            bigtext_arr.push(`:${num_conv.toWords(output[i])}:`)
        else { 
            if (output[i] !== ' ') { 
                if (!output[i].match(/^[a-zA-Z]+$/)) 
                    bigtext_arr.push(`:question:`)
                else
                    bigtext_arr.push(`:regional_indicator_${output[i].toLowerCase()}:`)
            } else bigtext_arr.push('   '); 
        }
    }

    try {
        await message.channel.send(bigtext_arr.join('')); 
        return message.delete() 
    } catch (e) { 
        return message.reply(`eRroR, eRroR, eRroR.`) 
    }
}
exports.help = { 
    name: 'bigtext'
}