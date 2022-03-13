const { Router } = require('express');
module.exports.Router = class Auth extends Router {
    constructor() {
        super();
        this.get('/', async(req, res, next) => {
            res.redirect("/vote")
        });
    }
};

module.exports.name = '/vote';