const Discord = require('discord.js');
const chalk = require('chalk');


exports.execute = (client, message, args) => {

  if (message.channel.type == 'text') {
    //Vérifier si il a la permission
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission de faire ceci.");
    //Set l'image du serveur
    let sicon = message.guild.iconURL;
    //Set le message d'aide
    let clearHelp = new Discord.RichEmbed()
    .setDescription("~Aide CLEAR~")
    .setThumbnail(sicon)
    .setColor("#c300ff")
    .addField("Comment clear ?", `Pour cela, <@${message.author.id}> tu dois faire la commande: \n**__a!clear__ __{1,2,3/all}__**`)
    .addField("Limite :", "``Vous ne devez pas dépasser 100 messages à supprimer, si vous voulez en supprimer plus faites plusieurs fois la commande.``");
    //Vérifie qu'il y a un argument.
    if(!args[1]) return message.channel.send(clearHelp)
    //Vérifie que le nombre de messages à supprimer est en dessous ou égal à 100
    if(args[1] > 100) return message.channel.send("**Tu ne peux pas supprimer plus de 100 messages !**")
    //Supprimer un nombre de message infinie
    if(args[1] === "all") return message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    messagesDeleted = messages.array().length;
    message.channel.sendMessage(`**Tous les messages ont été supprimés**`).then(msg => {msg.delete(3000)});
  })
    //Supprimer le nombre de message définis
    message.channel.fetchMessages()
      .then(messages => {
      message.channel.bulkDelete(args[1]);
      messagesDeleted = messages.array().length; // Nombre de message supprimés

      // Logging the number of messages deleted on both the channel and console.
      message.channel.sendMessage(`**${args[1]} messages ont été supprimé(s)**`).then(msg => {msg.delete(3000)});
      })
      .catch(err => {
      console.log('Erreurs pendant le clear:');
      console.log(err);
  });
};
  
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` CLEAR `))+ ']\n--------------------------------------')

};

exports.info = {
    name: "clear",
    alias: ["clean", "cl"],
    permission: "modo",
    type: "modo"
};
