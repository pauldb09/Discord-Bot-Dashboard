const mongoose = require('mongoose');
const rrdb = new mongoose.Schema({
    serverID: { type: String, required: true },
    roleID: { type: String, required: true },
    reaction: { type: String, required: true },
    level: { type: String, required: true },
    messagec: { type: String, required: true },

})
const RRModel = module.exports = mongoose.model('rr', rrdb)