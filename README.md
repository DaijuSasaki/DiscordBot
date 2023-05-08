何も機能がないDiscordBotです.
npm install することで必要なモジュールがインストールされます.
このディレクトリ内に.envというファイルを作り

DISCORD_BOT_TOKEN=#作ったBOTのトークン
APPLICATION_ID=#作ったBOTのApplicationID
GUILD_ID=#スラッシュコマンドを追加するサーバーID

を書き込み, node deploy-commands.js することでサーバーにコマンドを登録することができます.
node index.js でBotが動きます.