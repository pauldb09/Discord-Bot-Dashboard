const passport = require('passport');
const { Router } = require('express');
const Guild = require('../database/models/guild')

module.exports.Router = class Profile extends Router {
    constructor() {
        super();
        this.get('/', async function(req, res) {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            let guildsCounts = await req.bot.shard.fetchClientValues("guilds.cache.size");
            let guildsCount = guildsCounts.reduce((p, count) => p + count);
            let ChanCounts = await req.bot.shard.fetchClientValues("channels.cache.size");
            let chansCount = ChanCounts.reduce((p, count) => p + count);

            res.status(200).render('rank.ejs', {
                bot: req.bot.user,
                user: req.user,
                UserAvatar,
                chansCount,
                guildsCount,
                client: req.bot,
                is_logged: (req.isAuthenticated()),
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),

            });
        });

    }
};

module.exports.name = '/profile';