import { Client, GatewayIntentBits, Collection } from "discord.js";
const config = require("./Config/config.json");
import Colors from 'colors.ts';
const chichi = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
});
Colors.theme({ logMess: ["blue", "bold"] });
try {
    const stringlength2 = 69;
    console.log("\n");
    console.log("     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓");
    console.log(`     ┃ ` + " ".repeat(-1 + stringlength2 - ` ┃ `.length) + "┃");
    console.log(`     ┃ ` + `Now Start Running Bot` + " ".repeat(-1 + stringlength2 - ` ┃ `.length - `Now Start Running Bot`.length) + "┃");
    console.log(`     ┃ ` + " ".repeat(-1 + stringlength2 - ` ┃ `.length) + "┃");
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`);
    console.log(`\n`);
} catch (err) {
    console.log(err);
}

chichi.login(config.token).then(() => {
    console.log('test successful');
})