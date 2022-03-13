const passport = require('passport');
const { Router } = require('express');

module.exports.Router = class Home extends Router {
    constructor() {
        super();
        this.get('/buy', async(req, res, next) => {
            return res.redirect("https://www.patreon.com/GreenBotDiscord/")
        });

        this.get('/', async function(req, res) {
            return res.redirect("https://www.patreon.com/GreenBotDiscord/")
        });
    }
};

module.exports.name = '/team';