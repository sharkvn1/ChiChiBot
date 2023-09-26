import fs from 'fs';
import path from 'path';
const cmds = [];
const colors = require('@colors/colors');
let dateNow = Date.now();

module.exports = (chichi: { slashCommands: { set: (arg0: any, arg1: any) => void; }; }) => {
    console.log(colors.magenta("[x] :: ") + colors.brightYellow(`Now starting loading commands...`));

    const foldersPath = path.join(__dirname, '../commands');
    const cmdsFolder = fs.readdirSync(foldersPath);

    for (const folder of cmdsFolder) {
        const cmdPath = path.join(foldersPath, folder);
        const cmdFiles = fs.readdirSync(cmdPath).filter((file: string) => file.endsWith('.ts'));
        for (const file of cmdFiles) {
            const filePath = path.join(cmdPath, file);
            const cmd = require(filePath).command;
            cmds.push(cmd.data.name);
            if ('data' in cmd && 'execute' in cmd) {
                chichi.slashCommands.set(cmd.data.name, cmd);
            } else {
                console.log(colors.brightRed(`[Warning] the cmd at ${filePath} is missing a required "data" or "execute" property`));
            }
        }
    }

    console.log(colors.magenta("[x] :: ") + colors.brightGreen(`Loaded ${cmds.length} commands after: `) + colors.green(`${Date.now() - dateNow}ms`));
    console.log('\n');
}