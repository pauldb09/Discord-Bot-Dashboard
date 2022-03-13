const { Router } = require('express');

module.exports.Router = class Home extends Router {
    constructor() {
        super();
        this.get('/', async function(req, res) {
            let UserAvatar;
            if (req.user) {

                if (req.user.avatar) {
                    UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

                } else {
                    UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

                }
            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";
            }

            const shards = await req.bot.shard.broadcastEval((client) => {
                return [
                    Math.round((process.memoryUsage().heapUsed / 1024 / 1024)),
                    client.guilds.cache.size,
                    client.shard.ids[0],
                    Math.round(client.ws.ping)
                ];
            });
            res.status(200).render('status.ejs', {
                bot: req.bot.user,
                shards,
                user: req.user,
                client: req.bot,
                UserAvatar,
                is_logged: (req.isAuthenticated())
            });
        });
    }
};

module.exports.name = '/status';