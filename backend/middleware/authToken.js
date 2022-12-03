const jwt = require('jsonwebtoken')

// gets token from request -> removes Bearer from token -> verifies token -> returns decoded token
function authenticateToken(req) {
  const authHeader = req.headers['authorization'] // get auth header value from client request
  const token = authHeader && authHeader.split(' ')[1] // if theres a header, disregard the 'Bearer' part of the header and get the token
  if (token == null) return 'token none' // if no token, return 401 (unauthorized)

  console.log('tokenExtracted: ', token)
  const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
  if (!decodedToken)
    return 'token invalid'
  return decodedToken
}

module.exports = authenticateToken