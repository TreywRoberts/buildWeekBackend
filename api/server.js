const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const UserRouter = require('./users/user-router')
const AuthRouter = require('./auth/auth-router')
const TruckRouter = require('./trucks/trucks-router')
const MenuRouter =require('./menu/menu-router')

const {restricted} = require('./auth/auth-middleware')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', AuthRouter)
server.use('/api/users', restricted, UserRouter)
server.use('/api/trucks', restricted, TruckRouter)
server.use('/api/menu', restricted, MenuRouter)

server.get('/', (req, res)=>{
    res.status(200).json('Hello There')
})
server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    })
  })
  
module.exports = server
