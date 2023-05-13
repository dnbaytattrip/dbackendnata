const Info = require('../../database/models/Info')

const getData = async (req, res) => {
    try {
        const data = await Info.find().sort({ createdAt: -1 })
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
module.exports = getData; 