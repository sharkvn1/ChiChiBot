import { Events, Client } from 'discord.js';
const guildConfig = require('../database/guildConfig');
module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(chichi: Client) {
        const data = chichi.guilds.cache.toJSON();
        for (const i in data) {
            await guildConfig.findOne({
                guildId: data[i].id
            }).then((Data: any) => {
                if (Data === null) {
                    new guildConfig({
                        guildId: data[i].id,
                        WelcomeChannelId: 0
                    }).save();
                }
            });
        }
    }
}