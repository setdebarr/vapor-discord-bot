import { SlashCommandBuilder, type CacheType, type ChatInputCommandInteraction } from 'discord.js';

import { Command } from '../../types/commands';

const command: Command = {
	data: new SlashCommandBuilder().setName('server').setDescription('Provides information about the server.'),
	async execute(interaction: ChatInputCommandInteraction<CacheType>) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(
			`This server is ${interaction.guild?.name} and has ${interaction.guild?.memberCount} members.`,
		);
	},
};

export default command;
