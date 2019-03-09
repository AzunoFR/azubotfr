const Discord = require('discord.js');
const chalk = require('chalk');
const superagent = require("superagent");

exports.execute = async (client, message, args) => {
  

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let doggoEmbed = new Discord.RichEmbed()
    .setColor("#fff200")
    .setTitle("~CHIEN~")
    .setImage(body.url);

    message.channel.send(doggoEmbed);

    };
    
    exports.info = {
        name: "dog",
        alias: ["dog", "dogimg"],
        permission: "default",
        type: "general"
    };
