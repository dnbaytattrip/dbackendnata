const jwt = require('jsonwebtoken');
const Admin = require('../database/models/Admin')

const jwtKey = process.env.JWT_KEY
const checkAdmin = (req, res, next) => {

    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).send('You must Be logged in');

    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, jwtKey, async (err, payload) => {
        if (err) {
            return res.status(401).send(authorization);
        }

        const { id } = payload;
        const user = await Admin.findById(id)
        req.user = user;

        next();
    })

}

module.exports = checkAdmin; 