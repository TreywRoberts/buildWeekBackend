const jwt = require('jsonwebtoken')
const {jwtSecret} = require('./../secrets/index')

function buildToken(user) {
    const payload = {
      // claims
      subject: user.user_id,
      username: user.username,
    }
    const config = {
      expiresIn: '1d',
    }
    return jwt.sign(
      payload, jwtSecret, config
    )
  }

module.exports = {
    buildToken
}