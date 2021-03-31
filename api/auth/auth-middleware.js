const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../secrets/index')
const User = require('../users/users-model')


const restricted = (req, res, next) =>{
    const token = req.headers.authorization
    if(!token){
        res.status(401).json({message: 'Token required'})
    } else {
        jwt.verify(token, jwtSecret, (err, decoded)=>{
            if(err){
                res.status(401).json({message: 'Token is invalid'})
            } else {
                req.decodedJwt = decoded
                next()
            }
        })

    }
}
const checkIfUsernameExists = async (req, res, next) =>{
    const user = await User.findBy({user_username: req.body.user_username});
    if(user && user.user_username){
        next()
    } else {
        res.status(401).json({message: 'Invalid credentials'})
    }
}
const checkIfUsernameIsTaken = async (req, res, next) =>{
    const user = await User.findBy({user_username: req.body.user_username});
    if(user && user.user_username){
        res.status(401).json({message: 'Username is taken'})
    } else {
        next()
    }
}

module.exports = {
    restricted,
    checkIfUsernameExists,
    checkIfUsernameIsTaken
}