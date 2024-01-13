import { SlashCommandBuilder, type CacheType, type ChatInputCommandInteraction } from 'discord.js';

import { Command } from '../../types/commands';

const command: Command = {
	data: new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	async execute(interaction: ChatInputCommandInteraction<CacheType>) {
		await interaction.reply('Pong!');
	},
};

export default command;
