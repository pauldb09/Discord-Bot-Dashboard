const passport = require('passport');
const { Router } = require('express');
const Guild = require('../database/models/guild')
const Discord = require("discord.js")
module.exports.Router = class Profile extends Router {
    constructor() {
        super();
        this.get('/', async function(req, res) {
            return res.redirect("/")
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }

            res.status(200).render('feedback.ejs', {
                bot: req.bot.user,
                user: req.user,
                UserAvatar,
                client: req.bot,
                is_logged: (req.isAuthenticated()),
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),

            });
        });
        this.post('/', async function(req, res) {
            if (req.body.feedback_message) {
                const embed = escape(JSON.stringify(new Discord.MessageEmbed()
                    .setTitle("New feedback")
                    .setDescription("📚 A new feedback has been gaven by `" + req.user.username + "`")
                    .addField("Feedback", req.body.feedback_message)
                    .addField("User ID", req.user.id)
                    .setFooter("Green-bot | green-bot.app", req.bot.user.displayAvatarURL())
                    .setColor("#3A871F")));
                req.bot.shard.broadcastEval(`
          this.channels.cache.get('881888552143695923').send({ embed: JSON.parse(unescape('${embed}')) });
             `)
                return res.redirect(`/feedback`);
            }

        });
    }
};

module.exports.name = '/feedback';