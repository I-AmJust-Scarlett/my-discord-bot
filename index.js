const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // Ping command
  if (message.content === "!ping") {
    message.reply("Pong!");
  }

  // Clear messages (basic moderation)
  if (message.content.startsWith("!clear")) {
    if (!message.member.permissions.has("ManageMessages")) return;

    const amount = parseInt(message.content.split(" ")[1]) || 5;
    message.channel.bulkDelete(amount);
  }
});

client.login(TOKEN);
