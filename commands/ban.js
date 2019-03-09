const Discord = require("discord.js");
const chalk = require('chalk');
const tool = require('../tool.js');
const cfg = require('../config.js');
const client = new Discord.Client();
const owner = cfg.config.OWNER_ID;
const prefix = cfg.config.PREFIX;

exports.execute = (client, message, args) => { 
  
      let logchannel = client.channels.find("name","📄logs")

      if(!logchannel) return message.channel.send("``Ce serveur ne possède pas de logs !\nFaites la commande **a!setup** pour avoir le tutoriel.``")

      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Vous n'avez pas la permission !");
      let reason = args.slice(1).join(' ');
      let user = message.mentions.users.first();
      if (reason.length < 1) return message.reply('Vous devez fournir une raison pour **bannir**');
      if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner un utilisateur').catch(console.error);
      if (!message.guild.member(user).bannable) return message.reply('Je ne peux pas **bannir** ce membre');
      if(!message.member.id !== "323472357639585792") return message.reply('Pourquoi le **bannir** ? C\'est **Azuno** !');
      message.guild.ban(user, 2);

      var embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('ACTION:', 'Ban')
      .addField('UTILISATEUR:', `${user.username}`)
      .addField('RAISON:', `${reason || 'Sans raison'}\n--------------------`)
      .setFooter(`BAN effectué par l'administrateur: ${message.author.username}`)
      .setThumbnail(`${message.guild.iconURL}`)
      logchannel.send(embed);
      
console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` BAN `))+ ']\n--------------------------------------')

};



exports.info = {
    name: "ban",
    alias: [],
    permission: "default",
    type: "admin"
};