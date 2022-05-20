const jwt = require('jsonwebtoken');
const Login = require('../database/models/login')

const jwtKey = process.env.JWT_KEY
const checkUser = (req, res, next) => {

    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send('You must be logged in');

    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, jwtKey, async (err, payload) => {
        if (err) {
            return res.status(401).send(authorization);
        }

        const { id } = payload;
        const user = await Login.findById(id)
        req.user = user;

        console.log(req.user)
        next();
    })

}

module.exports = checkUser; 