const Login = require('../../database/models/login')

const loginData = async (req, res) => {
    const { email, password } = req.body

    try {
        const jane = await Login.findOne({ email: email });
        if (jane) {
            const matched = await Login.findOne({ passcode: password });
            if (matched) {
                return res.status(200).json({ text: "success" })
            }
            else {
                return res.status(200).json({ text: "failure" })

            }
        }
        else {
            res.status(200).json({ text: " not found" })
        }


    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = loginData; 