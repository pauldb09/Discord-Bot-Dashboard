const mongoose = require('mongoose');
const cmddb = new mongoose.Schema({
    user_id: { type: String, required: true },
    userTag: { type: String, required: true },
    role: { type: String, required: true },
    motivation: { type: String, required: true },
    time: { type: String, required: true },
    why: { type: String, required: true },
    language: { type: String, required: true },
})
const application = module.exports = mongoose.model('application', cmddb)