const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "clear",
  execute(client, message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return;

    const amount = parseInt(args[0]) || 5;
    message.channel.bulkDelete(amount);
  }
};
