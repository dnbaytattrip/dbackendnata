const Info = require('../../database/models/Info')

const getData = async (req, res) => {
    try {
        const jane = await Info.find();
        if (jane) {
            return res.status(200).json({ jane })

        }
        else {
            return res.status(200).json({ jane: null })

        }

    }
    catch (e) {
        res.status(400).json({ e: 'error' })
    }



}
module.exports = getData; 