const Login = require('../../database/models/login')
const createToken = require('../../utils/createToken')

const loginData = async (req, res) => {
    const { email, password } = req.body

    try {
        const jane = await Login.findOne({ email: email });
        if (jane) {
            const matched = await Login.findOne({ passcode: password });
            if (matched) {
                const token = createToken(matched._id)
                return res.status(200).json({ text: "success", token })
            }
            else {
                return res.status(200).json({ text: "Password failure" })

            }
        }
        else {
            res.status(200).json({ text: "Email not found" })
        }


    }
    catch (e) {
        res.status(400).json({ e })
        console.log(e)

    }



}
module.exports = loginData; 