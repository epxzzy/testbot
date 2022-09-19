const { Client } = require("discord.js");
const express = require("express");
require('dotenv');
const server = express();
const axios = require("axios");
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
  partials: ["CHANNEL"]});
client.on("ready", () => {
  console.log("axe is ready to shine");
  client.user.setPresence({
        status: 'online',
        activity: {
            name: "your mom's moans",
            type: "LISTENING"
        }
    });

    // You can copy/paste
//server code start cuz server status not aligning with bot status
  server.all("/", (req, res) => {
  res.send("<html><body style='background-color:black'><a style='color:grey'>YEPP WORKIN</a></body></html>")
})
  function runnbitch() {
  server.listen(3000, () => {
    console.log("OI SERVER IS UP")
  })
}
runnbitch();
  //server code end
  console.log(`${client.user.tag} is online!`)
});
//cmd start

//cmd en
var isMuted = false;

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content == "> mojies") {
    let buffer = '';
    const emojiList = message.guild.emojis.cache.map(emoji => emoji.toString()).join(" ");
  message.channel.send(emojiList);
  console.log(emojiList);
  }
    try {
      let res = await axios.get(`
http://api.brainshop.ai/get?bid=169114&key=7pq1YNb9Jegvf0BF&uid=1&msg=${encodeURIComponent(message.content)}`);
      res = res.data.cnt.replace(":bruteaxe:", "<a:axe:1019701671191920660>")
//<a:sensor:1018168704325918751:>
      if (message.content === "> mute") {
        message.reply("muted. > unmute for unmute");
        isMuted = true;
    }
    if (message.content === "> unmute") {
      isMuted = false;
    }
    
    if(isMuted === false) {
        res.replace(":axemg:","eeeurmumeee");
        message.reply(res);
    }
  } catch(err) {
      message.reply("Glitch Matrix," + err.message)
  }
});
client.login(process.env.TOKEN); //login using the token

//The server bitch
