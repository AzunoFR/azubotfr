const Discord = require('discord.js');
const chalk = require('chalk');

exports.execute = (client, message, args) => {
  
    var generalCommands = "";
    var infoCommands = "";
    var modoCommands = "";
    var adminCommands = "";
	var ownerCommands = "";

    client.commands.forEach(command => {
        switch(command.info.type){
            case "general":
                generalCommands += command.info.name + "\n";
                break;

            case "info":
                infoCommands += command.info.name + "\n";
                break;
            
            case "modo":
                modoCommands += command.info.name + "\n";
                break;

            case "admin":
                adminCommands += command.info.name + "\n";
                break;
				
			case "owner":
                ownerCommands += command.info.name + "\n";
                break;

     
        }
    });

    var embed = new Discord.RichEmbed()
        .setColor(9955331)
        .addField("Commandes", ` \`\`\`css\n${generalCommands}\n\`\`\` ` + "\n",true)
        .addField("Informations", ` \`\`\`css\n${infoCommands}\n\`\`\` ` + "\n",true)
        .addField("Modération", ` \`\`\`css\n${modoCommands}\n\`\`\` ` + "\n",true)
        .addField("Administration", ` \`\`\`css\n${adminCommands}\n\`\`\` ` + "\n",true)
		.addField("Créateur", ` \`\`\`fix\n${ownerCommands}\n\`\`\` ` + "\n",true);

    message.channel.send(embed);
  
  	    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` COMMANDS `))+ ']\n--------------------------------------')     

};

exports.info = {
    name: "commandes",
    alias: ["cmds", "cmd", "aide", "help"],
    permission: "default",
    type: "general"
};
