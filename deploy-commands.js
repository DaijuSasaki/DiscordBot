require('dotenv').config();
const {REST, Routes} = require('discord.js');

const pingFile = require('./commands/ping.js');

const token = process.env.DISCORD_BOT_TOKEN;
const applicationId = process.env.APPLICATION_ID;
const guildId = process.env.GUILD_ID;

const commands = [pingFile.data.toJSON()];

const rest = new REST({version: '10'}).setToken(token);

(async ()=>{
    try {
	await rest.put(
	    Routes.applicationGuildCommands(applicationId, guildId),
	    {body: commands},
	);
	console.log('サーバー固有のコマンドが登録されました');
    }
    catch(error) {
	console.error('コマンドの登録中にエラーが発生しました:', error);
    }
})();
