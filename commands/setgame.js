const Discord = require("discord.js");
const tool = require('../tool.js');
const cfg = require('../config.js');
const client = new Discord.Client();
const owner = cfg.config.OWNER_ID;
const prefix = cfg.config.PREFIX;
const chalk = require('chalk');

exports.execute = (client, message, args) => {

if(message.author.id !== owner ) 
if(!message.author.id !== owner ) return message.channel.sendMessage("Vous n'avez pas la permission !!");
  
    if(args.length < 2){
        message.channel.send("no game specified");
        return;
    }

    var gameName = "";
    for(var i = 1; i < args.length; i++){
        gameName += args[i] + " ";
    } message.channel.send(`Nouveau Jeu : ${gameName}`)
    client.user.setActivity(gameName)
        .then(user => console.log("--> Nouveau Jeu : " + gameName))
        .catch(console.error);
  
      console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` SET-GAME `))+ ']\n--------------------------------------')     

};

exports.info = {
    name: "setgame",
    alias: ["setbotgame"],
    permission: "owner",
    type: "owner"
};
