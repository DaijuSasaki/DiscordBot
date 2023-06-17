require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const pingFile = require('./commands/ping.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.DISCORD_BOT_TOKEN;

client.once(Events.ClientReady, c => {
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === pingFile.data.name) {
	try {
	    await pingFile.execute(interaction);
	}
	catch(error) {
	    console.error(error);
	    if(interaction.replied || interaction.deferred) {
		await interaction.followUp({content: 'コマンド実行時にエラーになりました.', ephemeral:true});
	    }
	    else {
		await interaction.reply({content: 'コマンド実行時にエラーになりました.', ephemeral:true});
	    }
	}
    }
    else {
	console.error(`${interaction.commandName}というコマンドには対応していません.`);
    }
});

client.login(token);
