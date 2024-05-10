const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    name: String,
    member: Number,
});


const Community = mongoose.model('Community', communitySchema);
module.exports = Community;