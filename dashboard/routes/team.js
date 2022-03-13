const passport = require('passport');
const { Router } = require('express');
const database = require('../database/database');
database.then(x => {
    console.log('Database connected');
})
const application = require('../database/models/application');
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
            res.status(200).render('team.ejs', {
                bot: req.bot.user,
                user: req.user,
                apply: null,
                error: null,
                success: null,
                list: null,
                client: req.bot,
                UserAvatar,
                is_logged: (req.isAuthenticated())
            });
        });
        this.get('/join', async function(req, res) {
            if (!req.user) return res.redirect('/auth/login/')
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
            const has_applied = await application.findOne({
                user_id: req.user.id
            })
            if (has_applied) {
                return res.status(200).render('team.ejs', {
                    bot: req.bot.user,
                    user: req.user,
                    apply: true,
                    has_applied,
                    error: 'You have already applied to the team',
                    client: req.bot,
                    success: null,
                    UserAvatar,
                    is_logged: (req.isAuthenticated())
                });
            }
            res.status(200).render('team.ejs', {
                bot: req.bot.user,
                user: req.user,
                apply: true,
                has_applied,
                client: req.bot,
                list: null,

                success: null,
                error: null,
                UserAvatar,
                is_logged: (req.isAuthenticated())
            });
        });
        this.get('/list', async function(req, res) {
            if (!req.user) return res.redirect('/auth/login/')
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
            const apllications = await application.find({})
            res.status(200).render('team.ejs', {
                bot: req.bot.user,
                user: req.user,
                apply: null,
                list: true,
                apllications,
                client: req.bot,
                success: null,
                error: null,
                UserAvatar,
                is_logged: (req.isAuthenticated())
            });
        });
        this.post('/join', async function(req, res) {
            if (!req.user) return res.redirect('/auth/login/')
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
            const has_applied = await application.findOne({
                user_id: req.user.id
            })
            if (has_applied) {
                return res.status(200).render('team.ejs', {
                    bot: req.bot.user,
                    user: req.user,
                    apply: true,
                    has_applied,
                    error: 'You have already applied to the team',
                    client: req.bot,
                    list: null,

                    success: null,
                    UserAvatar,
                    is_logged: (req.isAuthenticated())
                });
            } else {
                console.log(req.body);
                const application_ = new application({
                    user_id: req.user.id,
                    userTag: req.user.username,
                    role: req.body.wanted_role,
                    motivation: req.body.motivation,
                    time: req.body.available_time,
                    why: req.body.why,
                    language: req.body.languages,
                })
                application_.save().catch(err => {
                    return res.status(200).render('team.ejs', {
                        bot: req.bot.user,
                        user: req.user,
                        apply: true,
                        has_applied,
                        error: 'Please complete the form correctly',
                        client: req.bot,
                        success: null,
                        list: null,

                        UserAvatar,
                        is_logged: (req.isAuthenticated())
                    });
                })
                return res.status(200).render('team.ejs', {
                    bot: req.bot.user,
                    user: req.user,
                    apply: true,
                    has_applied,
                    success: 'You have applied successfully to the team!',
                    error: null,
                    client: req.bot,
                    list: null,

                    UserAvatar,
                    is_logged: (req.isAuthenticated())
                });

            }
        });
    }
};

module.exports.name = '/team';