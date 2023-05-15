const Admin = require('../../database/models/Admin')
const createToken = require('../../utils/createToken')
const bcrypt = require('bcryptjs');

const adminLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const admin = await Admin.findOne({ email: email });
        if (admin) {
            const matched = await bcrypt.compare(password, admin.password)

            if (matched) {
                const token = createToken(matched._id)
                return res.status(200).json({ text: "success", token, role: admin.role })
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
module.exports = adminLogin; 