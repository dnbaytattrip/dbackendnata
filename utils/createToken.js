const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_KEY
const createToken = (id) => {
    return jwt.sign({ id }, jwtKey, {
        expiresIn: 7 * 24 * 60 * 60
    })
}
module.exports = createToken; 