import { token, chichiBotId } from '../Config/config.json';
import { Client, REST, Routes } from 'discord.js';
import path from 'path';
import fs from 'fs';
const cmds = [];
let dateNow = Date.now();
const colors = require('@colors/colors');

module.exports = (chichi: Client) => {
    const foldersPath = path.join(__dirname, '../commands');
    const cmdsFolder = fs.readdirSync(foldersPath);
    for (const folder of cmdsFolder) {
        const cmdPath = path.join(foldersPath, folder);
        const cmdFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith('.ts'));
        for (const file of cmdFiles) {
            const filePath = path.join(cmdPath, file);
            const cmd1 = require(filePath);
            const cmd = cmd1.command;
            cmds.push(cmd.data.toJSON());
        }
    }

    const rest = new REST().setToken(token);

    (async () => {
        try {
            console.log(colors.magenta("[x] :: ") + colors.brightYellow('Now start deploy slash commands...'))
            const data = await rest.put(
                Routes.applicationCommands(chichiBotId),
                { body: cmds },
            );
            console.log(colors.magenta("[x] :: ") + colors.brightGreen(`Successfully deploy ${cmds.length} slash commands after: `) + colors.green(`${Date.now() - dateNow}ms`));
        } catch (error) {
            console.error(error);
        }
    })();
}