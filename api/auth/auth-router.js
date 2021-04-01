const router = require("express").Router();
const { jwtSecret } = require("./../secrets/index"); // use this secret!
const bcryptjs = require('bcryptjs')

const Users = require('./../users/users-model');
const {buildToken} = require('./buildToken');
const { checkIfUsernameExists, checkIfUsernameIsTaken } = require("./auth-middleware");


router.post("/register", checkIfUsernameIsTaken, (req, res, next) => {
    const credentials = req.body;
  
      const rounds = process.env.BCRYPT_ROUNDS || 8
  
      const hash = bcryptjs.hashSync(credentials.user_password, rounds)
      
      credentials.user_password = hash
      
      Users.add(credentials)
      .then(user=>{
          res.status(201).json(user)
        })
        .catch(next)
        
  });
  router.post("/login", checkIfUsernameExists, (req, res, next) => {
    const { user_username, user_password } = req.body
      Users.findBy({user_username: user_username})
        .then((user)=>{
          if(user && bcryptjs.compareSync(user_password, user.user_password)){
            const token = buildToken(user)
            res.status(200).json({message: `${user_username} is back`, token})
          } else {
            res.status(401).json({message: 'Invalid credentials'})
          }
        })
        .catch(next)
  });

module.exports = router