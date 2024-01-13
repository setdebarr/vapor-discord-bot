import { GuildMember, SlashCommandBuilder, type CacheType, type ChatInputCommandInteraction } from 'discord.js';

import { Command } from '../../types/commands';

const command: Command = {
	data: new SlashCommandBuilder().setName('user').setDescription('Provides information about the user.'),
	async execute(interaction: ChatInputCommandInteraction<CacheType>) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		if (interaction.member instanceof GuildMember) {
			await interaction.reply(
				`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`,
			);
		} else {
			await interaction.reply(`This command was run by ${interaction.user.username}.`);
		}
	},
};

export default command;
