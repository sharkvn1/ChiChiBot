import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { SlashCommand } from "../../types";

export const command: SlashCommand = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("ping"),
    execute: async (interaction) => {
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: "Pentiminax" })
                    .setDescription(`🏓 Pong! \n 📡 Ping: ${interaction.client.ws.ping}`)
                    .setColor('#ff8e4d')
            ]
        })
    }
}