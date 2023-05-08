何も機能がないDiscordBotです.<br>
npm install することで必要なモジュールがインストールされます.<br>
このディレクトリ内に.envというファイルを作り<br>
<br>
DISCORD_BOT_TOKEN=#作ったBOTのトークン<br>
APPLICATION_ID=#作ったBOTのApplicationID<br>
GUILD_ID=#スラッシュコマンドを追加するサーバーID<br>
<br>
を書き込み, node deploy-commands.js することでサーバーにコマンドを登録することができます.<br>
node index.js でBotが動きます.
