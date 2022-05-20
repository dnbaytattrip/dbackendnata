const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const loginSchema = new Schema({
    email: {
        type: String,
        trim: true
    },
    passcode: {
        type: String,
    },

}, { timestamps: true })
const Login = mongoose.model('Login', loginSchema);
module.exports = Login;  