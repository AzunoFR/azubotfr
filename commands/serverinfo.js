const Discord = require('discord.js');
const chalk = require('chalk');

exports.execute = (client, message, args) => {
  
  let online =  message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let sicon = message.guild.iconURL;
  


    var embed = new Discord.RichEmbed()
        .setColor(9955331)
		.setThumbnail(sicon)
		.setAuthor(message.guild.name, sicon)
        .addField("Identifiant", ` \`\`\`fix\n${message.guild.id}\n\`\`\` `, true)
        .addField("Nom", ` \`\`\`fix\n${message.guild.name}\n\`\`\` `, true)
        .addField("Créateur", ` \`\`\`fix\n${message.guild.owner.displayName}\n\`\`\` `, true)
        .addField("Region", ` \`\`\`fix\n${message.guild.region}\n\`\`\` `, true)
		.addField("Canaux",  ` \`\`\`js\n${message.guild.channels.size}\n\`\`\` `, true)
		.addField("Membres", ` \`\`\`js\n${message.guild.memberCount}\n\`\`\` `, true)
		.addField("Humanoïdes", ` \`\`\`js\n${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}\n\`\`\` `, true)
		.addField("Androïdes", ` \`\`\`js\n${message.guild.members.filter(m => m.user.bot).size}\n\`\`\` `, true)
		.addField("En Ligne", ` \`\`\`js\n${online.size}\n\`\`\` `, true)
		.addField("Rôles", ` \`\`\`js\n${message.guild.roles.size}\n\`\`\` `, true)
		.setFooter(`Date de Création • ${day}.${month}.${year}`);

    message.channel.send(embed);
  
  	    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` SERVER-INFO `))+ ']\n--------------------------------------')     

};

exports.info = {
    name: "serverinfo",
    alias: ["si"],
    permission: "default",
    type: "info"
};
