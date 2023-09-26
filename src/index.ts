console.clear();

import { Client, GatewayIntentBits, Collection } from "discord.js";
import { SlashCommand } from './types';
import config from "./Config/config.json";
const colors = require('@colors/colors');

colors.setTheme({
    log: ['green', 'bold']
});
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

try {
    const stringLength2 = 69;
    console.log("\n");
    console.log(colors.log("     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓"));
    console.log(colors.log(`     ┃ ` + " ".repeat(-1 + stringLength2 - ` ┃ `.length) + "┃"));
    console.log(colors.log(`     ┃ ` + `Now Start Running Bot` + " ".repeat(-1 + stringLength2 - ` ┃ `.length - `Now Start Running Bot`.length) + "┃"));
    console.log(colors.log(`     ┃ ` + " ".repeat(-1 + stringLength2 - ` ┃ `.length) + "┃"));
    console.log(colors.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`));
    console.log(`\n`);
} catch (err) {
    console.log(err);
}

chichi.slashCommands = new Collection<string, SlashCommand>();

async function requirehandlers() {
    for await (const handler of [
        "antiCrash",
        "events",
        "commands",
        "deployCmd",
    ]) {
        try {
            await require(`../src/handlers/${handler}`)(chichi);
        } catch (e) {
            console.log(e);
        }
    }
}

requirehandlers();

chichi.login(config.token)