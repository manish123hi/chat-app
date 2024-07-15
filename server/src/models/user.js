const mongoose = require('mongoose')
const {Schema} = mongoose;

const chatScheme = new Schema({
    name: String
});


const User = mongoose.model('User', chatScheme);
module.exports = User