const User = require('../../database/models/User')
const createToken = require('../../utils/createToken')
const bcrypt = require('bcryptjs');
const loginData = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email: email });
        if (user) {
            const matched = await bcrypt.compare(password, user.password)

            if (matched) {
                const token = createToken(matched._id)
                return res.status(200).json({ text: "success", token, role: user.role })
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