import { Collection, CommandInteraction, Message, PermissionResolvable, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js"

export interface SlashCommand {
    data: SlashCommandBuilder | any,
    async execute: (interaction: CommandInteraction) => Promise<void>,
}

declare module "discord.js" {
    export interface Client {
        slashCommands: Collection<string, SlashCommand>
    }
}