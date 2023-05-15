const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },


    email: {
        type: String,
        trim: true
    },

    image: {
        type: String,


    },
    role: {
        type: String,
        default: 'user'

    },


}, { timestamps: true })
const User = mongoose.model('User', userSchema);
module.exports = User; 