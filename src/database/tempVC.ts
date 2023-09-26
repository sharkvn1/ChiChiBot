import { Schema, model } from 'mongoose';
const vc = new Schema({
    guildId: { type: String, require: true },
    channelId: String,
    owner: String,
})

module.exports = model('tempVC', vc);