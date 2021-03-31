const express = require('express')
const { checkUserId } = require('./user-middleware')
const Users = require('./users-model')
const router = express.Router()

router.get('/', (req, res, next)=>{
    Users.getAll()
        .then(users=>{
            res.status(200).json(users)
        })
        .catch(next)
})

router.get('/:user_id', checkUserId, (req, res, next) =>{
    Users.findById(req.params.user_id)
        .then(user =>{
            res.status(200).json(user)
        })
        .catch(next)
})






module.exports = router