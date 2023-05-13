const Admin = require('../../database/models/Admin')
const createToken = require('../../utils/createToken')
const bcrypt = require('bcryptjs');

const adminSignup = async (req, res) => {
    const { email, password } = req.body

    try {
        const hashed_password = await bcrypt.hash(password, 7)
        const user = await Admin.create({
            email, password: hashed_password
        });
        const token = createToken(user._id)
        return res.status(200).json({ text: "success", token })
    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = adminSignup; 