// initial tutorial referenced: https://thomlom.dev/create-a-discord-bot-under-15-minutes/

require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const audio = require("./airhorn.js");

const { getAudio, listCommands } = audio;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", async message => {
  if (message.content === "ping") {
    message.reply("Hello!");
  }

  if (!message.guild) return;

  if (message.member.voice.channel) {
    console.log("connection made");
    const connection = await message.member.voice.channel.join();
    const audioFile = getAudio(message);
    if (audioFile) {
      connection.play(`./audio/${audioFile}`);
    }

    listCommands(message);
  }
});
client.login(process.env.BOT_TOKEN);
