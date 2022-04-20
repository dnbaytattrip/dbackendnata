const express = require('express')
const mongoose = require('mongoose')
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, () => {

        console.log(`successfully connected to database`)
    })
}
module.exports = connectDB