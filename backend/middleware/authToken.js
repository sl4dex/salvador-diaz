const jwt = require('jsonwebtoken')
const  User = require('../models/User')

// gets token from request -> removes Bearer from token -> verifies token -> returns decoded token
async function authenticateToken(req) {
  const authHeader = req.headers['authorization'] // get auth header value from client request
  const token = authHeader && authHeader.split(' ')[1] // if theres a header, disregard the 'Bearer' part of the header and get the token
  
  if (!token)
    return null
  
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
    if (!decodedToken || !decodedToken.id)
      return {tokenValid: false}
  
    const user = await User.findById(decodedToken.id)
    if (!user)
      return {tokenValid: false}

    return {tokenValid: true, user}
  } catch {
    console.log('Error occurred in authtoken')
    return {tokenValid: false}
  }
}

module.exports = authenticateToken