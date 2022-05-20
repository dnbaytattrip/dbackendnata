const Login = require('../../database/models/login')

const signupData = async (req, res) => {
    const { password, email } = req.body
    console.log(password, email)

    try {
        const jane = await Login.create({
            passcode: password, email: email
        });
        res.status(200).json({ jane })
        console.log(jane)
    }
    catch (e) {
        res.status(400).json({ e: e })
        console.log(e)

    }



}
module.exports = signupData; 