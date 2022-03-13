const { Router } = require('express');
module.exports.Router = class Server extends Router {
    constructor() {
        super();
        this.get('/:guildID', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;
            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";
            }
            let ignored
            if (guild.settings.ignored_channel) {
                if (guild.channels.find((c) => c.id === guild.settings.ignored_channel)) {
                    ignored = guild.channels.find((c) => c.id === guild.settings.ignored_channel)
                } else {
                    ignored = null
                }
            } else {
                ignored = null
            }
            let admin_role
            if (guild.settings.admin_role) {
                if (guild.roles.find((c) => c.id === guild.settings.admin_role)) {
                    admin_role = guild.roles.find((c) => c.id === guild.settings.admin_role)
                } else {
                    admin_role = null
                }
            } else {
                admin_role = null
            }
            let DeleteActive = await Guild.findOne({ serverID: req.params.guildID, reason: `delete_msg` })
            res.status(200).render("guild.ejs", {
                bot: req.bot.user,
                user: req.user,
                ignored,
                admin_role,
                DeleteActive,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/level', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            const levelMessagedb = await Guild.findOne({ serverID: req.params.guildID, reason: `levelMessage` })
            let levelMessage;
            if (levelMessagedb) {
                levelMessage = levelMessagedb.content
            } else {
                levelMessage = "GG {user}, you just passed a level, you are now level {level}"
            }
            let levelActive = await Guild.findOne({ serverID: req.params.guildID, reason: `level` })
            let EditActive = await Guild.findOne({ serverID: req.params.guildID, reason: `level_edit` })

            const findlc = await Guild.findOne({ serverID: req.params.guildID, reason: `levelChannel` })

            res.status(200).render("levels.ejs", {
                bot: req.bot.user,
                user: req.user,
                levelActive,
                EditActive,
                levelMessage,
                findlc,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/autorole', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            res.status(200).render("autorole.ejs", {
                bot: req.bot.user,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/music', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            res.status(200).render("djmode.ejs", {
                bot: req.bot.user,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/channels', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            const logdb = await Welcome.findOne({ serverID: req.params.guildID, reason: 'logs' })
            const stardb = await Welcome.findOne({ serverID: req.params.guildID, reason: 'starboard' })
            res.status(200).render("channels.ejs", {
                bot: req.bot.user,
                user: req.user,
                logdb,
                stardb,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/customs/:Action', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let action = req.params.Action;
            let wiew;
            if (action === 'wiew') {
                wiew = true;
            } else {
                wiew = null;
            }
            let membersLeaderboard = await CmdModel.find({ serverID: req.params.guildID })
            res.status(200).render("customs.ejs", {
                bot: req.bot.user,
                action,
                wiew,
                user: req.user,
                membersLeaderboard,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/moderation', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            const welcome = await Welcome.findOne({ serverID: req.params.guildID, reason: `boost` })


            res.status(200).render("moderation.ejs", {
                welcome,
                bot: req.bot.user,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/commands/:Action', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let action = req.params.Action;
            let wiew;
            if (action === 'wiew') {
                wiew = true;
            } else {
                wiew = null;
            }
            let GamesEnabled = guild.settings.games_enabled
            let GiveawaysEnabled = guild.settings.util_enabled
            res.status(200).render("commands.ejs", {
                bot: req.bot.user,
                action,
                GiveawaysEnabled,
                wiew,
                GamesEnabled,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/embed', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return


            res.status(200).render("embed.ejs", {
                bot: req.bot.user,

                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.post('/:guildID/commands/enable/games', async(req, res) => {
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, { $set: { games_enabled: true } }, { new: true });


        });
        this.post('/:guildID/commands/disable/games', async(req, res) => {
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, { $set: { games_enabled: null } }, { new: true });

        });
        this.post('/:guildID/commands/disable/giveaways', async(req, res) => {
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, { $set: { util_enabled: null } }, { new: true });

        });
        this.post('/:guildID/commands/enable/giveaways', async(req, res) => {
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, { $set: { util_enabled: true } }, { new: true });

        });
        this.get('/:guildID/tickets/:Action', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let action = req.params.Action;
            let wiew;
            if (action === 'wiew') {
                wiew = true;
            } else {
                wiew = null;
            }
            let membersLeaderboard = await ticketPanel.find({ serverID: req.params.guildID })
            res.status(200).render("tickets.ejs", {
                bot: req.bot.user,
                action,
                wiew,
                user: req.user,
                membersLeaderboard,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/responders/:Action', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let action = req.params.Action;
            let wiew;
            if (action === 'wiew') {
                wiew = true;
            } else {
                wiew = null;
            }
            const AutoResponders = require('../database/models/AutoResponders');

            let membersLeaderboard = await AutoResponders.find({ serverID: req.params.guildID })
            res.status(200).render("responders.ejs", {
                bot: req.bot.user,
                action,
                wiew,
                user: req.user,
                membersLeaderboard,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.post('/:guildID/responders/add', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return




            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var string_length = 10;
            var randomstring = '';

            for (var x = 0; x < string_length; x++) {

                var letterOrNumber = Math.floor(Math.random() * 2);
                if (letterOrNumber == 0) {
                    var newNum = Math.floor(Math.random() * 9);
                    randomstring += newNum;
                } else {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum, rnum + 1);
                }

            }
            const uniqID = randomstring;
            const verynew = new AutoResponders({
                serverID: `${guild.id}`,
                channelID: `${req.body.trigger_channel}`,
                message_reaction: `${req.body.trigger_message}`,
                id: `${uniqID}`,
                message: `${req.body.answer_message}`,
                del: `no`,
                inv: `no`,
            }).save();
            return res.redirect(`/server/${req.params.guildID}/responders/wiew`);
        });
        this.get('/:guildID/premium', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            const premiumDB = require('../database/models/premium');
            const premium = await premiumDB.findOne({ userID: req.user.id })

            res.status(200).render("premiumr.ejs", {
                bot: req.bot.user,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                premium,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/premium/give', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            const premiumDB = require('../database/models/premium');
            const premium = await premiumDB.findOne({ userID: req.user.id })
            if (premium) {
                const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, { $set: { premium: true, premiumUserID: req.user.id } }, { new: true });
                res.redirect("/server/" + req.params.guildID + "/premium")

            } else {
                res.redirect("/profile")

            }
        });
        this.post('/:guildID/ticket/add', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')

            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            const embed = escape(JSON.stringify(new Discord.MessageEmbed()
                .setTitle(req.body.ticket_title)
                .setDescription(req.body.ticket_description)
                .setFooter("green-bot.app | Free tickets without bugs", req.bot.user.displayAvatarURL())
                .setColor("#3A871F")
            ));
            console.log("Channel ID : " + req.body.ticket_channel + "")
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var string_length = 10;
            var randomstring = '';

            for (var x = 0; x < string_length; x++) {

                var letterOrNumber = Math.floor(Math.random() * 2);
                if (letterOrNumber == 0) {
                    var newNum = Math.floor(Math.random() * 9);
                    randomstring += newNum;
                } else {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum, rnum + 1);
                }

            }
            const uniqID = randomstring;
            req.bot.shard.broadcastEval(`
          this.channels.cache.get('${req.body.ticket_channel}').send({ embed: JSON.parse(unescape('${embed}')) }).then(m=>{
            m.react('🎫')
            const verynew = new ticketPanel({
                serverID: '${req.params.guildID}',
                channelID: '${req.body.ticket_channel}',
                messageID: m.id,
                titleEmbed: '${req.body.ticket_title}',
                messageEmbed: '${req.body.ticket_description}',
                category: '${req.body.ticket_category}',
                ticketID: '${uniqID}',
                roleID: '${req.body.ticket_role}',
                welcomeMessage: '${req.body.ticket_message}',
            }).save();
          })
             `)
            console.log("There")

            return res.redirect(`/server/${req.params.guildID}/tickets/wiew`);
        });
        this.post('/:guildID/embed', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            const embed = escape(JSON.stringify(new Discord.MessageEmbed()
                .setTitle(req.body.embed_title)
                .setDescription(req.body.embed_description)
                .setFooter("Green-bot | green-bot.app", req.bot.user.displayAvatarURL())
                .setImage(req.body.embed_image)
                .setColor(req.body.embed_color)));
            console.log("Channel ID : " + req.body.embed_channel + "")
            req.bot.shard.broadcastEval(`
          this.channels.cache.get('${req.body.embed_channel}').send({ embed: JSON.parse(unescape('${embed}')) });
       
             `)
            return res.redirect(`/server/${req.params.guildID}/embed`);


        });
        this.get('/:guildID/giveaways/:Action', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let ab = await utils.checkPerms(req, res);
            if (!ab) return

            let action = req.params.Action;
            let wiew;

            if (action === 'wiew') {
                wiew = true;
            } else {
                wiew = null;
            }
            let a = await req.bot.db.get('giveaways')
            let membersLeaderboard = a.filter(g => g.guildID === req.params.guildID && !g.ended)
            res.status(200).render("giveaways.ejs", {
                bot: req.bot.user,
                action,
                wiew,
                user: req.user,
                membersLeaderboard,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.post('/:guildID/customs/:Action', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')

            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let action = req.params.Action;

            if (action === 'add') {
                let statustoset;
                if (req.body.delete_msg) {
                    statustoset = "ok";
                    console.log("Ok , delete")

                } else {
                    statustoset = null;
                }

                let help;
                if (req.body.display_help) {
                    console.log("Ok , help")

                    help = "ok";
                } else {
                    help = null;
                }
                const verynew = new CmdModel({
                    serverID: `${req.params.guildID}`,
                    name: `${req.body.command_name}`,
                    text: `${req.body.command_text}`,
                    deleteMessage: `${statustoset}`,
                    displayHelp: `${help}`,
                }).save();
                return res.redirect(`/server/${req.params.guildID}/customs/wiew`);

            }

        });
        this.post('/:guildID/giveaways/:Action', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')

            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return


            req.bot.manager.start(guild.channels.find((c) => c.id === req.body.giveaway_channel), {
                time: ms(req.body.giveaway_time),
                prize: req.body.giveaway_prize,
                winnerCount: parseInt(req.body.giveaway_winners, 10),
                embedColorEnd: "#ED360E",
                messages: {
                    giveaway: "\n\n<:greenbotsourire1:811148362526883860> **GIVEAWAY** <:greenbotsourire1:811148362526883860>",
                    giveawayEnded: "\n\n<:greenbotsourire1:811148362526883860> **GIVEAWAY ENDED** <:greenbotsourire1:811148362526883860>",
                    timeRemaining: "• Remaining time:: **{duration}**!\n[**Vote for 25% Entry Boost**](/vote)",
                    inviteToParticipate: "• React with `🎁` to enter\n • Host by <@" + req.user.id + ">\n•" + req.body.giveaway_winners + " Winner(s)",
                    winMessage: "🏆 Congratulations, {winners} ! You won **{prize}**!\n{messageURL}",
                    embedFooter: "Green-bot | open source project ",
                    noWinner: "Giveaway cancelled, no valid participations.",
                    winners: "🏆 Winners (s)",
                    endedAt: "Ends at: ",
                    units: {
                        seconds: "seconds",
                        minutes: "minutes",
                        hours: "hours",
                        days: "days",
                        pluralS: false
                    }
                }
            })

            return res.redirect(`/server/${req.params.guildID}/giveaways/wiew`);


        });
        this.get('/:guildID/customs/edit/:commandID', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let id = req.params.commandID;
            let command = await CmdModel.findOne({ _id: id })
            res.status(200).render("customs.ejs", {
                bot: req.bot.user,
                command,
                id,
                action: "edit",
                wiew: null,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });


        });
        this.post('/:guildID/customs/edit/:commandID', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let id = req.params.commandID;
            let statustoset;
            if (req.body.delete_msg) {
                statustoset = "ok";
                console.log("Ok , delete")

            } else {
                statustoset = null;
            }

            let help;
            if (req.body.display_help) {
                console.log("Ok , help")

                help = "ok";
            } else {
                help = null;
            }
            let command = await CmdModel.findOneAndUpdate({ _id: id }, { $set: { name: req.body.command_name, text: req.body.command_text, deleteMessage: statustoset, displayHelp: help, } }, { new: true })

            return res.redirect(`/server/${req.params.guildID}/customs/wiew`);


        });
        this.get('/:guildID/customs/delete/:commandID', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')

            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return


            let id = req.params.commandID;
            const verynew = await CmdModel.findOneAndDelete({ _id: id })
            return res.redirect(`/server/${req.params.guildID}/customs/wiew`);



        });
        this.get('/:guildID/tickets/del/:commandID', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')

            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return


            const messageID = req.params.commandID;
            let chekexeist = await ticketPanel.findOne({ _id: messageID, serverID: req.params.guildID })
            if (!chekexeist) return res.redirect("/profile")
            let d = await ticketPanel.findOneAndDelete({ _id: messageID })
            const results = await req.bot.shard.broadcastEval(`
            let guild = this.guilds.cache.get('${req.params.guildID}');
            if(guild){
             let channel = guild.channels.cache.get('${chekexeist.channelID}').messages.fetch('${chekexeist.messageID}').then(m => m.delete())
            }
            `);
            return res.redirect(`/server/${req.params.guildID}/tickets/wiew`);
        });
        this.get('/:guildID/responders/del/:commandID', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')

            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return


            const messageID = req.params.commandID;
            let chekexeist = await AutoResponders.findOne({ _id: messageID, serverID: req.params.guildID })
            if (!chekexeist) return res.redirect("/profile")
            let d = await AutoResponders.findOneAndDelete({ _id: messageID })

            return res.redirect(`/server/${req.params.guildID}/responders/wiew`);
        });
        this.get('/:guildID/giveaways/end/:commandID', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            const messageID = req.params.commandID;
            let toend = req.bot.manager.giveaways.find(g => g.messageID === messageID)
            console.log(toend.prize)
            if (toend) {
                req.bot.manager.end(messageID);
                return res.redirect(`/server/${req.params.guildID}/giveaways/wiew`);

            } else {
                return res.redirect(`/profile`);

            }



        });
        this.post('/:guildID/channels', async(req, res) => {

            if (!req.user) return res.redirect('/auth/login/')




            if (req.body.log_CHANNELID !== 'no') {
                const verify = await Welcome.findOne({ serverID: req.params.guildID, reason: `logs` })
                if (verify) {
                    const newchannel = await Welcome.findOneAndUpdate({ serverID: req.params.guildID, reason: `logs` }, { $set: { channelID: req.body.log_CHANNELID } }, { new: true });
                } else {
                    const verynew = new Welcome({
                        serverID: `${req.params.guildID}`,
                        channelID: `${req.body.log_CHANNELID}`,
                        reason: 'logs',
                    }).save();
                }
            } else {
                let verify = await Welcome.findOne({ serverID: req.params.guildID, reason: `logs` })
                if (verify) {
                    const newchannel = await Welcome.findOneAndDelete({ serverID: req.params.guildID, reason: `logs` });
                } else {

                }
            }
            if (req.body.star_CHANNELID !== 'no') {
                console.log('abadakor')
                const verify = await Welcome.findOne({ serverID: req.params.guildID, reason: `starboard` })
                if (verify) {
                    const newchannel = await Welcome.findOneAndUpdate({ serverID: req.params.guildID, reason: `starboard` }, { $set: { channelID: req.body.star_CHANNELID } }, { new: true });
                } else {
                    const verynew = new Welcome({
                        serverID: `${req.params.guildID}`,
                        channelID: `${req.body.star_CHANNELID}`,
                        reason: 'starboard',
                    }).save();
                }
            } else {
                let verify = await Welcome.findOne({ serverID: req.params.guildID, reason: `starboard` })
                if (verify) {
                    const newchannel = await Welcome.findOneAndDelete({ serverID: req.params.guildID, reason: `starboard` });
                } else {

                }
            }
            const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, { $set: { suggestions: req.body.sugg_CHANNELID === "no" ? null : req.body.sugg_CHANNELID, chatbot: req.body.chatbot_CHANNELID === "no" ? null : req.body.chatbot_CHANNELID, autopost: req.body.autopost_CHANNELID === "no" ? null : req.body.autopost_CHANNELID } }, { new: true });
            return res.redirect(`/server/${req.params.guildID}/channels`);

        });
        this.post('/:guildID/autorole', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            if (!guild) return
            let a = await utils.checkPerms(req, res);
            if (!a) return
            const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, {
                $set: {
                    autorole: req.body.autorole_CHANNELID === "no" ? null : req.body.autorole_CHANNELID,
                    autorole_bot: req.body.autorolebot_CHANNELID === "no" ? null : req.body.autorolebot_CHANNELID

                }
            }, { new: true });
            return res.redirect(`/server/${req.params.guildID}/autorole`);

        });
        this.post('/:guildID/music', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            if (!guild) return
            let a = await utils.checkPerms(req, res);
            if (!a) return
            console.log(`${req.body.autoplay}`)

            const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, {
                $set: {
                    dj_role: req.body.dj === "no" ? null : req.body.dj,
                    autoplay: req.body.autoplay === "no" ? null : req.body.autoplay,
                    song: req.body.song

                }
            }, { new: true });
            return res.redirect(`/server/${req.params.guildID}/music`);

        });
        this.post('/:guildID/level', async(req, res) => {

            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return


            if (req.body.level_MESSAGE) {

                const levelMessagedb = await Guild.findOne({ serverID: req.params.guildID, reason: `levelMessage` })
                if (levelMessagedb) {
                    const newchannel = await Guild.findOneAndUpdate({ serverID: req.params.guildID, reason: `levelMessage` }, { $set: { content: req.body.level_MESSAGE, reason: `levelMessage` } }, { new: true });

                } else {
                    const verynew = new Guild({
                        serverID: `${req.params.guildID}`,
                        content: `${req.body.level_MESSAGE}`,
                        reason: 'levelMessage',
                    }).save();
                }
                if (req.body.level_CHANNELID) {
                    if (req.body.level_CHANNELID === 'no') {
                        let verify = await Guild.findOne({ serverID: req.params.guildID, reason: `levelChannel` })
                        if (verify) {
                            const newchannel = await Guild.findOneAndDelete({ serverID: req.params.guildID, reason: `levelChannel` });
                        } else {

                        }
                    } else if (req.body.level_CHANNELID === 'current') {
                        console.log('current')
                        const verify = await Guild.findOne({ serverID: req.params.guildID, reason: `levelChannel` })
                        if (verify) {
                            const newchannel = await Guild.findOneAndUpdate({ serverID: req.params.guildID, reason: `levelChannel` }, { $set: { content: `current` } }, { new: true });
                        } else {
                            const verynew = new Guild({
                                serverID: `${req.params.guildID}`,
                                content: `current`,
                                reason: 'levelChannel',
                            }).save();
                        }
                    } else {
                        const verify = await Guild.findOne({ serverID: req.params.guildID, reason: `levelChannel` })
                        if (verify) {
                            const newchannel = await Guild.findOneAndUpdate({ serverID: req.params.guildID, reason: `levelChannel` }, { $set: { content: req.body.level_CHANNELID } }, { new: true });
                        } else {
                            const verynew = new Guild({
                                serverID: `${req.params.guildID}`,
                                content: `${req.body.level_CHANNELID}`,
                                reason: 'levelChannel',
                            }).save();
                        }
                    }
                    console.log('se battre')

                }
                const levelActive = await Guild.findOne({ serverID: req.params.guildID, reason: `level` })

                if (req.body.level_status) {
                    if (levelActive) {

                    } else {
                        const verynew = new Guild({
                            serverID: `${req.params.guildID}`,
                            content: `true`,
                            reason: 'level',
                        }).save();
                    }
                } else {
                    if (levelActive) {
                        let del = await Guild.findOneAndDelete({ serverID: req.params.guildID, reason: `level` })
                    }
                }
                const EditActive = await Guild.findOne({ serverID: req.params.guildID, reason: `level_edit` })

                if (req.body.allow_edit) {
                    if (EditActive) {

                    } else {
                        const verynew = new Guild({
                            serverID: `${req.params.guildID}`,
                            content: `true`,
                            reason: 'level_edit',
                        }).save();
                    }
                } else {
                    if (EditActive) {
                        let del = await Guild.findOneAndDelete({ serverID: req.params.guildID, reason: `level_edit` })
                    }
                }




                return res.redirect(`/server/${req.params.guildID}/level`);
            }
        });
        this.post('/:guildID/leave', async(req, res) => {

            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let estatustoset;
            if (req.body.leave_status) {
                estatustoset = true;
            } else {
                estatustoset = null;
            }
            let imagestoset;
            if (req.body.wel_image) {
                imagestoset = true;

            } else {
                imagestoset = null;

            }
            let colorToSet;
            if (req.body.color) {
                colorToSet = req.body.color
            } else {
                colorToSet = "#3A871F"
            }
            console.log(colorToSet)
            const verify = await Welcome.findOne({ serverID: req.params.guildID, reason: `leave` })
            if (verify) {
                const newchannel = await Welcome.findOneAndUpdate({ serverID: req.params.guildID, reason: `leave` }, { $set: { color: colorToSet, image: imagestoset, status: estatustoset, channelID: req.body.leave_CHANNELID, message: req.body.leave_MESSAGE, reason: `leave` } }, { new: true });
            } else {
                const verynew = new Welcome({
                    serverID: `${req.params.guildID}`,
                    channelID: `${req.body.leave_CHANNELID}`,
                    image: imagestoset,
                    status: estatustoset,
                    message: `${req.body.leave_MESSAGE}`,
                    reason: 'leave',
                }).save();
            }
            await res.redirect(`/server/${req.params.guildID}/leave`);


        });
        this.post('/:guildID/welcome', async(req, res) => {

            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            console.log(req.body)
            let statustoset;
            if (req.body.wel_status) {
                statustoset = true;
            } else {
                statustoset = null;
            }
            let imagestoset;
            if (req.body.wel_image) {
                imagestoset = true;

            } else {
                imagestoset = null;

            }
            let embedtoset;
            if (req.body.embed_image) {
                embedtoset = true;

            } else {
                embedtoset = null;

            }
            let colorToSet;
            if (req.body.color) {
                colorToSet = req.body.color
            } else {
                colorToSet = "#3A871F"
            }
            console.log(colorToSet)
            const verify = await Welcome.findOne({ serverID: req.params.guildID, reason: `welcome` })
            if (verify) {
                const newchannel = await Welcome.findOneAndUpdate({ serverID: req.params.guildID, reason: `welcome` }, { $set: { color: colorToSet, image: imagestoset, status: statustoset, channelID: req.body.wel_CHANNELID, message: req.body.wel_MESSAGE, embed: embedtoset, reason: `welcome` } }, { new: true });
            } else {
                const verynew = new Welcome({
                    serverID: `${req.params.guildID}`,
                    channelID: `${req.body.wel_CHANNELID}`,
                    image: imagestoset,
                    status: statustoset,
                    embed: embedtoset,

                    message: `${req.body.wel_MESSAGE}`,
                    reason: 'welcome',
                }).save();
            }
            await res.redirect(`/server/${req.params.guildID}/welcome`);


        });
        this.post('/:guildID/ping', async(req, res) => {

            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let statustoset;
            if (req.body.wel_status) {
                statustoset = true;
            } else {
                statustoset = null;
            }

            const verify = await Welcome.findOne({ serverID: req.params.guildID, reason: `autoping` })
            if (verify) {
                const newchannel = await Welcome.findOneAndUpdate({ serverID: req.params.guildID, reason: `autoping` }, { $set: { status: statustoset, channelID: req.body.wel_CHANNELID, message: req.body.wel_MESSAGE, reason: `autoping` } }, { new: true });
            } else {
                const verynew = new Welcome({
                    serverID: `${req.params.guildID}`,
                    channelID: `${req.body.wel_CHANNELID}`,
                    image: `5000`,
                    status: statustoset,
                    message: `${req.body.wel_MESSAGE}`,
                    reason: 'autoping',
                }).save();
            }
            await res.redirect(`/server/${req.params.guildID}/ping`);


        });
        this.post('/:guildID/moderation', async(req, res) => {

            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            let statustoset;
            if (req.body.wel_status) {
                statustoset = true;
            } else {
                statustoset = null;
            }


            const verify = await Welcome.findOne({ serverID: req.params.guildID, reason: `boost` })
            if (verify) {
                const newchannel = await Welcome.findOneAndUpdate({ serverID: req.params.guildID, reason: `boost` }, { $set: { image: req.body.role, status: statustoset, channelID: req.body.wel_CHANNELID, message: req.body.wel_MESSAGE, reason: `boost` } }, { new: true });
            } else {
                const verynew = new Welcome({
                    serverID: `${req.params.guildID}`,
                    channelID: `${req.body.wel_CHANNELID}`,
                    image: `${req.body.role}`,
                    status: statustoset,
                    message: `${req.body.wel_MESSAGE}`,
                    reason: 'boost',
                }).save();
            }
            await res.redirect(`/server/${req.params.guildID}/moderation`);


        });
        this.get('/:guildID/welcome', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            const welcome = await Welcome.findOne({ serverID: req.params.guildID, reason: `welcome` })
            console.log(welcome)
            res.status(200).render("welcome.ejs", {
                welcome,
                bot: req.bot.user,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/ping', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            const welcome = await Welcome.findOne({ serverID: req.params.guildID, reason: `autoping` })

            res.status(200).render("autoping.ejs", {
                welcome,
                bot: req.bot.user,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.get('/:guildID/leave', async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            let UserAvatar;
            if (req.user.avatar) {
                UserAvatar = `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`;

            } else {
                UserAvatar = "https://www.pikpng.com/pngl/b/326-3268299_blue-default-discord-avatar-clipart.png";

            }
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return

            const leave = await Welcome.findOne({ serverID: req.params.guildID, reason: `leave` })
            res.status(200).render("leave.ejs", {
                leave,
                bot: req.bot.user,
                user: req.user,
                guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
                is_logged: (req.isAuthenticated()),
                findData: guild.settings,
                UserAvatar,
                guild
            });
        });
        this.post("/:guildID", async(req, res) => {
            if (!req.user) return res.redirect('/auth/login/')
            const guild = await utils.getServer(req.bot, req.params.guildID, res);
            let a = await utils.checkPerms(req, res);
            if (!a) return
            console.log("ok")
            let DeleteActive = await Guild.findOne({ serverID: req.params.guildID, reason: `delete_msg` })

            if (req.body.delete_status) {
                if (DeleteActive) {

                } else {
                    const verynew = new Guild({
                        serverID: `${req.params.guildID}`,
                        content: `true`,
                        reason: 'delete_msg',
                    }).save();
                }
            } else {
                if (DeleteActive) {
                    let del = await Guild.findOneAndDelete({ serverID: req.params.guildID, reason: `delete_msg` })
                }
            }

            const newchannel = await guildData.findOneAndUpdate({ serverID: req.params.guildID }, { $set: { prefix: req.body.new_prefix, color: req.body.embeds_color, ignored_channel: req.body.ignored === "no" ? null : req.body.ignored, admin_role: req.body.admin_role === "no" ? null : req.body.admin_role } }, { new: true });


            return res.redirect(`/server/${req.params.guildID}/`);


        });
    }
};

module.exports.name = '/server';