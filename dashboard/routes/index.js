const passport = require('passport');
const { Router } = require('express');

module.exports.Router = class Home extends Router {
    constructor() {
        super();
        this.get('/', function(req, res) {
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
            res.status(200).render('index.ejs', {
                bot: req.bot.user,

                user: req.user,
                client: req.bot,
                UserAvatar,
                is_logged: (req.isAuthenticated())
            });
        });
    }
};

module.exports.name = '/';