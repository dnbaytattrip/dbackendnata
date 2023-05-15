const User = require('../../database/models/User')
const createToken = require('../../utils/createToken')
const bcrypt = require('bcryptjs');
const loginData = async (req, res) => {
    const { name, email, image, SECRET_KEY } = req.body

    try {
        if (process.env.SECRET_KEY == SECRET_KEY) {
            const user = await User.findOne({ email: email });
            if (user) {


                const token = createToken(user._id)
                return res.status(200).json({ text: "success", token, user: user })


            }
            else {
                const user = await User.create({
                    name, email, image
                });
                const token = createToken(user._id)
                return res.status(200).json({ text: "success", token, user: user })

            }
        }
        else {
            return res.status(400).json({ text: "Invalid login" })
        }



    }
    catch (e) {
        res.status(400).json({ e })
        console.log(e)

    }



}
module.exports = loginData; 