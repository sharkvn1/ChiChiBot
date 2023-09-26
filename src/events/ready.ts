
import config from '../Config/config.json';
import { Events, Client } from 'discord.js';
import { connect } from 'mongoose';
let dateNow = Date.now();
const colors = require('@colors/colors');

colors.setTheme({
    log1: ['yellow', 'bold'],
    log2: ['green', 'bold'],
    log3: ['blue', 'bold'],
});
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(chichi: Client) {
        //logging message
        try {
            const stringLength2 = 69;
            console.log("\n")
            console.log(colors.log1(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`));
            console.log(colors.log1(`     ┃ ` + " ".repeat(-1 + stringLength2 - ` ┃ `.length) + "┃"))
            console.log(colors.log1(`     ┃ ` + `Logging into the BOT...` + " ".repeat(-1 + stringLength2 - ` ┃ `.length - `Logging into the BOT...`.length) + "┃"))
            console.log(colors.log1(`     ┃ ` + " ".repeat(-1 + stringLength2 - ` ┃ `.length) + "┃"))
            console.log(colors.log1(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
        } catch (err) { console.log(err) }
        try {
            const stringLength2 = 69;
            console.log("\n")
            console.log(colors.log2(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`));
            console.log(colors.log2(`     ┃ ` + " ".repeat(-1 + stringLength2 - ` ┃ `.length) + "┃"))
            console.log(colors.log2(`     ┃ ` + `Successfully logging to ${chichi.user.tag}` + " ".repeat(-1 + stringLength2 - ` ┃ `.length - `Successfully logging to ${chichi.user.tag}`.length) + "┃"))
            console.log(colors.log2(`     ┃ ` + " ".repeat(-1 + stringLength2 - ` ┃ `.length) + "┃"))
            console.log(colors.log2(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
        } catch (err) { console.log(err) }

        try {
            const stringLength2 = 69;
            console.log("\n")
            console.log(colors.log3(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`));
            console.log(colors.log3(`     ┃ ` + " ".repeat(-1 + stringLength2 - ` ┃ `.length) + "┃"))
            console.log(colors.log3(`     ┃ ` + `${chichi.user.tag} Successfully Starting` + " ".repeat(-1 + stringLength2 - ` ┃ `.length - `${chichi.user.tag} Successfully Starting`.length) + "┃"))
            console.log(colors.log3(`     ┃ ` + " ".repeat(-1 + stringLength2 - ` ┃ `.length) + "┃"))
            console.log(colors.log3(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
        } catch (err) { console.log(err) }

        //database loading
        console.log(colors.magenta("\n[x] :: ") + colors.brightYellow(`Now starting loading database...`));
        (async () => {
            await connect(config.database).catch(console.error);
        })();
        console.log(colors.magenta("[x] :: ") + colors.brightGreen(`Loaded database after: `) + colors.green(`${Date.now() - dateNow}ms`));
    }
}
