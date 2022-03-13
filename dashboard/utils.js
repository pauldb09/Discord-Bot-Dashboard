const guildData = require("./database/models/guildData")
const Discord = require("discord.js")
async function getServer(bot, guildID, res) {
    console.log(`Starting fetching guild with ID: ${guildID}`)
    const results = await bot.shard.broadcastEval(`
    let guild = this.guilds.cache.get('${guildID}');
    if(guild){
        if(guild.name) {
            let toReturn = guild.toJSON();
            toReturn.channels = guild.channels.cache.toJSON();
            toReturn.roles = guild.roles.cache.map((r) => {
                return {
                    name: r.name,
                    hexColor: r.hexColor,
                    id: r.id,
                    managed:r.managed,
                    permissions:r.permissions
                };
            });
            toReturn;
        }
    }
    `);
    // get a random number between 0 and the number of shards
    const shard = ;
    const guild = results.find((g) => g);
    if (guild) {
        console.log(`Found a guild for ${guildID}. Name: ${guild.name}`)
        let findData = await guildData.findOne({ serverID: guildID })
        if (!findData) {
            findData = await new guildData({ serverID: guildID, prefix: "*", lang: "en", premium: null, premiumUserID: null, color: "#3A871F", backlist: !1 }).save()
        }
        guild.settings = findData;
        return guild
    } else {
        console.log(`Not found, redirecting`)
        return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=783708073390112830&scope=bot&permissions=8&guild_id=${guildID}`);
    }
}
async function checkPerms(req, res) {
    const UserGuilds = req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591)
    if (!UserGuilds.find((g) => g.id === req.params.guildID)) {
        return res.redirect("/profile")
    }
    return true
}
module.exports = { getServer, checkPerms };