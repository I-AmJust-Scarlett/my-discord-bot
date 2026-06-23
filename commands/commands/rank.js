const fs = require("fs");

let xp = fs.existsSync("./xp.json") ? JSON.parse(fs.readFileSync("./xp.json")) : {};

module.exports = {
  name: "rank",
  execute(client, message) {
    const id = message.author.id;

    if (!xp[id]) return message.reply("No data yet.");

    message.reply(`Level: ${xp[id].level} | XP: ${xp[id].xp}`);
  }
};
