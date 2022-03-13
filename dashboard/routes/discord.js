const passport = require('passport');
const { Router } = require('express');
const CheckAuth = require('../middlewares/CheckAuth');
const Discord = require('discord.js');
const guild = require('../database/models/guild')
module.exports.Router = class Auth extends Router {
    constructor() {
        super();
        this.get('/', async(req, res, next) => {
            res.redirect("https://discord.gg/SQsBWtjzTv")
        });
    }
};

module.exports.name = '/discord';