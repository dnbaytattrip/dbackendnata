const User = require('../../database/models/User')
const checkAdmin = require('../../middleware/checkAdmin')

const getUserData = async (req, res) => {
    try {
        const data = await User.find().sort({ createdAt: -1 })
        if (data) {
            return res.status(200).json({ data })

        }
        else {
            return res.status(400).json({ error: "no data found" })

        }

    }
    catch (e) {
        res.status(400).json({ e: 'error' })
    }



}
module.exports = getUserData; 