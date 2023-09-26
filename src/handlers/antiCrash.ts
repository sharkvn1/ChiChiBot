const colors = require('@colors/colors');
colors.setTheme({
    error: ['red', 'dim']
});
module.exports = async (chichi) => {
    let dateNow = Date.now();
    console.log(colors.magenta("[x] :: ") + colors.brightYellow(`Now starting antiCrash...`));
    //process.on('beforeExit', (code) => { // If You Want You Can Use
    //  console.log(colors.error('=== [antiCrash] | [beforeExit] | [start] ==='));
    //  console.log(code);
    //  console.log(colors.error('=== [antiCrash] | [beforeExit] | [end] ==='));
    //});
    //process.on('exit', (error) => { // If You Want You Can Use
    //  console.log(colors.error('=== [antiCrash] | [exit] | [start] ==='));
    //  console.log(error);
    //  console.log(colors.error('=== [antiCrash] | [exit] | [end] ==='));
    //});
    // process.on('multipleResolves', (type, promise, reason) => { // Needed
    //     console.log(colors.error('=== [antiCrash] | [multipleResolves] | [start] ==='));
    //     console.log(type, promise, reason);
    //     console.log(colors.error('=== [antiCrash] | [multipleResolves] | [end] ==='));
    // });
    process.on('unhandledRejection', (reason, promise) => { // Needed
        console.log(colors.error('=== [antiCrash] | [unhandledRejection] | [start] ==='));
        console.log(reason);
        console.log(colors.error('=== [antiCrash] | [unhandledRejection] | [end] ==='));
    });
    process.on('rejectionHandled', (promise) => { // If You Want You Can Use
        console.log(colors.error('=== [antiCrash] | [rejectionHandled] | [start] ==='));
        console.log(promise);
        console.log(colors.error('=== [antiCrash] | [rejectionHandled] | [end] ==='));
    })
    process.on("uncaughtException", (err, origin) => { // Needed
        console.log(colors.error('=== [antiCrash] | [uncaughtException] | [start] ==='));
        console.log(err);
        console.log(colors.error('=== [antiCrash] | [uncaughtException] | [end] ==='));
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => { // Needed
        console.log(colors.error('=== [antiCrash] | [uncaughtExceptionMonitor] | [start] ==='));
        console.log(err);
        console.log(colors.error('=== [antiCrash] | [uncaughtExceptionMonitor] | [end] ==='));
    });
    process.on('warning', (warning) => { // If You Want You Can Use
        console.log(colors.error('=== [antiCrash] | [warning] | [start] ==='));
        console.log(warning);
        console.log(colors.error('=== [antiCrash] | [warning] | [end] ==='));
    });
    // process.on('SIGINT', () => { // If You Want You Can Use
    //     console.log(colors.error('=== [antiCrash] | [SIGINT] ==='));
    // });
    console.log(colors.magenta("[x] :: ") + colors.brightGreen(`AntiCrash started after:`) + colors.green(`${Date.now() - dateNow}ms`));
    console.log('\n')
};