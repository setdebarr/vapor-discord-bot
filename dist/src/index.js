"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const config = require("../config.json");
const client = new Discord.Client();
client.on('ready', async () => {
    console.log('The bot is ready');
    client.user.setActivity('Plotting Human Demise...');
});
client.on('message', async (message) => {
    if (message.author.bot)
        return;
    console.log(`User: ${message.author.username} | ${message.content}`);
    if (message.content.indexOf(config.prefix) !== 0)
        return;
    message.reply('Thank you for summoning me human. Unfortunately I do not have any commands to use yet. Try again later when I have had time to create some.');
});
if (config.production === false) {
    client.login(config.token_dev);
}
else {
    client.login(config.token_prod);
}
//# sourceMappingURL=index.js.map