import * as fs from 'fs-extra';
import * as path from 'node:path';

import { Client, GatewayIntentBits } from 'discord.js';

(async () => {
	const client = new Client({ intents: [GatewayIntentBits.Guilds] });
	const eventsPath = path.join(__dirname, 'events');
	const eventFiles = await fs.readdir(eventsPath).then((files) => files.filter((file) => file.endsWith('.js')));

	for (const file of eventFiles) {
		const event = (await import(path.join(eventsPath, file))).default;
		client[event.once ? 'once' : 'on'](event.name, async (...args) => event.execute(...args));
	}

	void client.login(
		process.env['NODE_ENV'] === 'production' ? process.env['DISCORD_TOKEN'] : process.env['DISCORD_TOKEN_DEV'],
	);
})().catch((error) => {
	console.log('Something went fatally wrong');
	console.log(error);
	console.log(error.message);
	console.log(error.stack);
	process.exit(1);
});
