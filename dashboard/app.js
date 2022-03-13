        morgan = require("morgan");
        const passport = require('passport');
        const { Strategy } = require('passport-discord');

        module.exports.load = async(client) => {

            /* Init express app */
            const express = require("express"),
                session = require("express-session"),
                path = require("path"),
                app = express();

            /* Routers */
            const a = require("./routes/index")
            const b = require("./routes/commands")
            const e = require("./routes/profile")
            const f = require("./routes/rank")
            const g = require("./routes/premium")
            const h = require("./routes/invite")
            const m = require("./routes/discord")
            const d = require("./routes/auth")
            const gr = require("./routes/feedback")
            const gre = require("./routes/status")
            const team = require("./routes/team")
            const terms = require("./routes/terms")
            const tos = require("./routes/privacy")
            const vote = require("./routes/vote")



            /* App configuration */
            app
                .use(morgan('dev'))

            // Set the engine to html (for ejs template)
            .engine("html", require("ejs").renderFile)
                .set("view engine", "ejs")
                // Set the css and js folder to ./public
                .use(express.static(path.join(__dirname, "/public")))
                // Set the ejs templates to ./views
                .set("views", path.join(__dirname, "/views"))
                // Set the dashboard port
                .set("port", 80)
                // Set the express session password and configuratio

            .use(session({
                    secret: `ey.${Date.now()}$AZza${Date.now()}.ntm`,
                    resave: false,
                    saveUninitialized: false
                }))
                .use(express.json())
                .use(express.urlencoded({ extended: false }))
                .use(passport.initialize())
                .use(passport.session())
                .use((req, res, next) => {
                    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                    res.setHeader('Access-Control-Allow-Credentials', true);
                    req.config = this.config;
                    req.bot = client;
                    next();
                })
                .use("/auth", new d.Router())
                .use("/commands", new b.Router())
                .use("/profile", new e.Router())
                .use("/rank", new f.Router())
                .use("/premium", new g.Router())
                .use("/invite", new h.Router())
                .use("/discord", new m.Router())
                .use("/", new a.Router())
                .use("/feedback", new gr.Router())
                .use("/status", new gre.Router())
                .use("/team", new team.Router())
                .use("/terms", new terms.Router())
                .use("/privacy", new tos.Router())
                .use("/vote", new vote.Router())



            passport.serializeUser((user, done) => {
                done(null, user);
            });
            passport.deserializeUser((obj, done) => {
                done(null, obj);
            });
            passport.use(new Strategy({
                clientID: "783708073390112830",
                clientSecret: "OLfh_1WGdospojspkqf_XueF5_VmdTg3",
                callbackURL: `https://green-bot.app/auth/login`,
                scope: ['identify', 'guilds']
            }, (accessToken, refreshToken, profile, done) => {
                process.nextTick(function() {
                    return done(null, profile);
                });
            }));
            // Listen
            app.listen(app.get("port"), () => {
                console.log("GreenBot dashboard is listening on port " + app.get("port"));
            });

            client.spawned = true;

        };