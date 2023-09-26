import fs from 'fs';
import path from 'path';
const events = [];
const colors = require('@colors/colors');
let dateNow = Date.now();

module.exports = (chichi) => {
    const eventsPath = path.join(__dirname, '../events');
    const eventsFile = fs.readdirSync(eventsPath).filter((file: string) => file.endsWith('.ts'));
    console.log(colors.magenta("[x] :: ") + colors.brightYellow("Now starting loading events..."));
    for (const file of eventsFile) {
        const filePath = path.join(eventsPath, file);
        const event = require(filePath)
        events.push(event);
        console.log(event.name);
        if (event.once) {
            chichi.once(event.name, (...args: any) => event.execute(...args));
        } else {
            chichi.on(event.name, (...args: any) => event.execute(...args));
        }
    }
    console.log(colors.magenta("[x] :: ") + colors.brightGreen(`Loaded ${events.length} events after: `) + colors.green(`${Date.now() - dateNow}ms`));
    console.log('\n');
}
