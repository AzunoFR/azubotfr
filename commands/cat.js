const Discord = require('discord.js');
const chalk = require('chalk');
const superagent = require("superagent");

exports.execute = async (client, message, args) => {
  

    let {body} = await superagent
    .get(`http://aws.random.cat//meow`);

    let catsEmbed = new Discord.RichEmbed()
    .setColor("#fff200")
    .setTitle("~CHAT~")
    .setImage(body.file);

    message.channel.send(catsEmbed);

    };
    
    exports.info = {
        name: "cat",
        alias: ["catimg", "chat"],
        permission: "default",
        type: "general"
    };
