const jwt = require('jsonwebtoken');


const verify = (req, res, next) => {
    const { authorization } = req.headers
    const token = authorization?.split(" ")?.pop().trim()
    if (!token) return res.status(401).send({ message: "You're not authorized" })
    try {
        const verified = jwt.verify(token, env('JWT_SECRET_KEY'))
        req.user = verified
    } catch (error) { return res.status(401).send({ message: error.message }) }
    return next()

}


module.exports = verify