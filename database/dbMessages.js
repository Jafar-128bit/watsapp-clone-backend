const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const whatsappSchema = new Schema({
    message: String,
    name: String,
    timestamps: String,
    received: Boolean
});

module.exports = mongoose.model('messagecontents', whatsappSchema);
