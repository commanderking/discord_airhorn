// initial tutorial referenced: https://thomlom.dev/create-a-discord-bot-under-15-minutes/

require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Hello!");
  }
});
console.log("(process.env.BOT_TOKEN", process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN);
