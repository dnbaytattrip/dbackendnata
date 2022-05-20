const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const socket = require('socket.io')
dotenv.config()
const connectDB = require('./database/connection')
const Router = require('./routes/routesNames')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
///connecting to database
connectDB()
app.get('/', (req, res) => {
    res.json({ sms: "hello from dnata" })
})
const PORT = process.env.PORT || 5050
const server = app.listen(PORT, () => {
    console.log(`listening to port${PORT}`)

})
app.use(Router)
const io = socket(server)

io.on('connection', (socket) => {
    console.log(`connected to the socket`)
    io.on('disconnect', () => {
        console.log(`disconnected to the socket`)

    })
})