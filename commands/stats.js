const Discord = require('discord.js');
const chalk = require('chalk');


exports.execute = (client, message, args) => {
     let totalSeconds = (client.uptime / 1000);
     let days = Math.floor(totalSeconds / 86400);
     let hours = Math.floor(totalSeconds / 3600);
     totalSeconds %= 3600;
     let minutes = Math.floor(totalSeconds / 60);
     let seconds = totalSeconds % 60;
     let bicon = client.user.displayAvatarURL;

var tl_ss = 5;

var msg = `Commandes: **${client.commands.length}**`;
    msg += `\nServeurs: **${client.guilds.array().length}**`;
    msg += `\nSalons: **${client.channels.array().length}**`;
    msg += `\nEmojis: **${client.emojis.array().length}**`;
    msg += `\nPing: **${client.ping.toFixed(0)}ms**`;
    msg += `\nUptime: **${days} Jours, ${hours} Heures, ${minutes} Minutes**`;   // TODO fix format

    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bicon)
        .setTitle("**Invitez le bot sur votre serveur discord.**")
        .setURL(" https://discordapp.com/oauth2/authorize?client_id=553930661199740934&scope=bot&permissions=8")
        .addField("Informations", msg)
        

    message.channel.send(embed);
  
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` BOT INFO `))+ ']\n--------------------------------------')

};

exports.info = {
    name: "stats",
    alias: ['st'],
    permission: "default",
    type: "info"
};
