const mongoose = require('mongoose');
const leveldb = new mongoose.Schema({
    serverID: { type: String, required: true },
    userID: { type: String, required: true },
    xp: { type: String, required: true },
    level: { type: String, required: true },
    messagec: { type: String, required: true },

})
const levelModel = module.exports = mongoose.model('level', leveldb)