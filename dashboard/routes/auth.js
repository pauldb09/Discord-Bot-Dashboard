const passport = require('passport');
const { Router } = require('express');
const CheckAuth = require('../middlewares/CheckAuth');
const Discord = require('discord.js');
const guild = require('../database/models/guild')
module.exports.Router = class Auth extends Router {
    constructor() {
        super();
        this.get('/login', passport.authenticate('discord', { failureRedirect: '/' }), async(req, res, next) => {
            res.status(200).redirect('/profile');
            next();

        });
        this.get('/logout', [CheckAuth], function(req, res) {
            req.logout();
            res.status(200).redirect('/');
        });
    }
};

module.exports.name = '/auth';