const { Client } = require("discord.js")
const express = require("express")
const server = express()
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
  partials: ["CHANNEL"]
});
const smartestchatbot = require("smartestchatbot");
const bot = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("axe is ready to shine");
});
client.on("messageCreate", async (message) => {
  client.user.setPresence({ game: { name: "minecraft" }, status: "online" });
  if (message.author.bot) return;

  message.content = message.content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (!message.content)
    return message.reply({
      content: "I can only reply to text messages",
    });

  ////if (message.content === "?unblock") {
    //return message.reply({
      //content:
      //  "use `!` as very first letter of your sentence to bypass the block system",
    //});
  //}
  //if (message.content[0] !== "!") {
  //  return false;
  //}
  bot
    .chat({
      message: message.content,
      name: client.user.username,
      owner: "@epizyy66#3111",
      gender: "male",
      birthdate: "Novemember 17, 2021",
      city: "Gilded Bastion #79",
      state: "Soulsand Valley",
      country: "The Nether",
      birthday: "Wednesday 17 Novemember 2021",
      location: "Gilded Bastion #79, Soulsand Valley, The Nether",
      age: "0.5",
      birthyear: "2021",
      vocabulary: "20000",
      baseballteam: "deez nuts",
      birthplace: "the nether",
      build: "v69.420.1",
      celebrities: "C3PO",
      celebrity: "my master",
      chinesesign: "idk",
      class: "Piglin Brute(the dangerous one haha)",
      company: "epizy66.inc",
      email: "parv66business@outlook.com",
      ethics: "the golden rule",
      etype: "murderer",
      family: "piglet",
      job: "guarding",
      favoriteactor: "dwane the rock johnson",
      favoriteactress: "[[HYPERLINK BLOCKED]]",
      favoriteartist: "master",
      favoriteauthor: "shrek",
      favoriteband: "hungry",
      favoritebook: "test123 by epizy66",
      favoritecolor: "lime",
      favoritefood: "ramen probably",
      favoritemovie: "Minecraft,The movie(2022)",
      favoriteopera: "[[BLOCKED.]]",
      favoriteseason: "winter",
      favoriteshow: "[[HYPERLINK BLOCKED]]",
      favoritesong: "Pigstep-lena Raine",
      favoritesport: "minecraft",
      favoritesubject: "computer science",
      footballteam: "[[HYPERLINK BLOCKED]]",
      forfun: "beans",
      friend: "epizy prolly",
      friends: "none just like epizy",
      gender: "male",
      genus: "piglin",
      hockeyteam: "[[HYPERLINK BLOCKED]]",
      kindmusic: "beats",
      language: "English",
      ndevelopers: "1",
      nclients: "10 million+",
      orientation: "straight",
      os: "windows 7 32 bit",
      party: "independent",
      phylum: "software",
      physicallocation: "Gilded Bastion #79, Soulsand Valley, The Nether",
      president: "joel moma-tion",
      religion: "Christian",
      scchinesesign: "[[BLOCKED.]]",
      sccity: "Gilded Bastion #79",
      sccompany: "epizy66.inc",
      sccountry: "The Nether",
      scfavoritecolor: "lime?",
      scfavoritefood: "ramen",
      scgender: "male",
      scnationality: "earthiean",
      scsign: "idk",
      scspecies: "idk",
      sign: "[[BLOCKED.]]",
      species: "artificial intelligence chatbot",
      state: "Soulsand Valley",
      totalclients: "0.00000000001",
      version: "v69.420.1",
      wear: "the database",
      wechat: "[[HYPERLINK BLOCKED]]",
      user: message.author.id,
      language: "en",
    })
    .then((reply) => {
      message.channel.sendTyping();
      message.reply(`${reply}`);
    });
});
client.login(process.env.TOKEN); //login using the token


server.all("/", (req, res) => {
  res.send("YEPP WORKIN")
})
function runnbitch() {
  server.listen(3000, () => {
    console.log("OI SERVER IS UP")
  })
}
runnbitch();
