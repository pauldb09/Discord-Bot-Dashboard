const passport = require('passport');
const { Router } = require('express');
const CheckAuth = require('../middlewares/CheckAuth');
const Discord = require('discord.js');
const guild = require('../database/models/guild')
module.exports.Router = class Auth extends Router {
    constructor() {
        super();
        this.get('/', async(req, res, next) => {
            res.redirect("https://discord.com/oauth2/authorize?client_id=783708073390112830&scope=bot&permissions=19456")
        });
        this.get('/1', async(req, res, next) => {
            res.redirect("https://discord.com/oauth2/authorize?client_id=902201674263851049&scope=bot&permissions=8")
        });
        this.get('/2', async(req, res, next) => {
            res.redirect("https://discord.com/oauth2/authorize?client_id=906246223504240641&scope=bot&permissions=8")
        });
        this.get('/3', async(req, res, next) => {
            res.redirect("https://discord.com/oauth2/authorize?client_id=913065900125597706&scope=bot&permissions=8")
        });
  this.get('/chan', async(req, res, next) => {
            res.redirect("https://discord.com/oauth2/authorize?client_id=901466922820988968&response_type=code&permissions=19456&scope=applications.commands+bot")
        });

    }
};

module.exports.name = '/invite';