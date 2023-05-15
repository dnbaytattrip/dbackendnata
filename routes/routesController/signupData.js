const User = require('../../database/models/User')
const createToken = require('../../utils/createToken')
const bcrypt = require('bcryptjs');

const signupData = async (req, res) => {
    const { name, mobile, password, email } = req.body

    try {
        const hashed_password = await bcrypt.hash(password, 7)
        const user = await User.create({
            name, mobile, password: hashed_password, email
        });
        const token = createToken(user._id)
        return res.status(200).json({ text: "success", token, role: user.role })
    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = signupData; 