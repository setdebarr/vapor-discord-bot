const logger = require("./src/logging");
const Discord = require("discord.js");
const config = require("./config.json");
const argv = require("minimist")(process.argv.slice(2));

const client = new Discord.Client();

client.on("ready", async () => {
	logger.info("The bot is ready");
	client.user.setActivity("Plotting Human Demise...");
});

client.on("message", async (message) => {
	if (message.author.bot) return;
	logger.info(`User: ${message.author.username} | ${message.content}`);
	if (message.content.indexOf(config.prefix) !== 0) return;

	message.reply(
		"Thank you for summoning me human. Unfortunately I do not have any commands to use yet. Try again later when I have had time to create some.",
	);
});

if (argv["dev"] === true) {
	client.login(config.token_dev);
} else {
	client.login(config.token_prod);
}
