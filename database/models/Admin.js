const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({


    email: {
        type: String,
        trim: true
    },

    password: {
        type: Number,
    },

}, { timestamps: true })
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin; 