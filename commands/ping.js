const {SlashCommandBuilder} = require('discord.js');

module.exports={
    data: new SlashCommandBuilder().setName('ping')
	.setDescription('応答可能なら応答する'),
    execute: async function(interaction) {
	await interaction.reply('にゃーん');
    },
};
