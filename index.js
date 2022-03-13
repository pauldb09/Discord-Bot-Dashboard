const util = require("util"),
    fs = require("fs"),
    readdir = util.promisify(fs.readdir);

const Discord = require("discord.js");
const client = new Discord.Client({
    partials: ["REACTION", "MESSAGE", "CHANNEL", "GUILD_MEMBER"]
});
const init = async() => {
    const evtFiles = await readdir("./events/");
    evtFiles.forEach((file) => {
        const eventName = file.split(".")[0];
        const event = new(require(`./events/${file}`))(client);
        client.on(eventName, (...args) => event.run(...args));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
    client.dash = require("./dashboard/app")
    client.login(""); // Log in to the discord api
};

init();
process.on("unhandledRejection", (err) => {
    console.error(err);
});