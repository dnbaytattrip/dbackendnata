const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const infoSchema = new Schema({
    name: {
        type: String,

        trim: true

    },

    email: {
        type: String,
        trim: true
    },


    number: {
        type: Number,
    },
    country: {
        type: String,
    },




}, { timestamps: true })
const Info = mongoose.model('Info', infoSchema);
module.exports = Info; 