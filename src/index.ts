require('dotenv').config();
import Discord = require('discord.js');

const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS]});

client.on('ready', async () => {
	console.log('The bot is ready');
	client!.user!.setActivity('Plotting Human Demise...');
});

client.on('message', async message => {
	if (message.author.bot) return;
	console.log(`User: ${message.author.username} | ${message.content}`);
	if (message.content.indexOf('!') !== 0) return;

	message.reply(
		'Thank you for summoning me human. Unfortunately I do not have any commands to use yet. Try again later when I have had time to create some.'
	);
});

// Login to Discord
client.login(process.env.BOT_TOKEN);
