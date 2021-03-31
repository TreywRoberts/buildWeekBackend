const Users = require('./users-model')

const checkUserId = (req, res, next) =>{
    const {user_id} = req.params
    Users.findById(user_id)
        .then(userId=>{
            if(!userId){
                res.status(400).json({message: 'There is no user with that ID'})
            } else {
                req.userId = userId
                next()
            }
        })
        .catch(err=>{
            next(err)
        })
}


module.exports = {
    checkUserId
}