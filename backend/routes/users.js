const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userRouter = express.Router()

userRouter.get('/users', async (req, res) => {
  const users = await User.find()
  res.status(200).send(users)
})

userRouter.post('/register', async (req, res, next) => { 
  try{
    // hashes the password with 10 "salt rounds". The salt is included in the hash
    const pwdHash = await bcrypt.hash(req.body.password, 10)
  
    const newUser = new User({
      username: req.body.username,
      passwordHash: pwdHash
    })
    const savedUser = await newUser.save()
    res.status(200).send(savedUser)
  } catch (err) {
    next(err) // Si hay un error, lo agarra y se lo manda el middleware errorHandler
  }
})

userRouter.post('/login', async (req, res) => {
  const user = await User.findOne({username: req.body.username}) // Se busca en la db un usuario con el mismo username que el del request
  const validPwd = await bcrypt.compare(req.body.password, user.passwordHash) // Se compara el passwordHash de la db con el passwordHash del request
  if (validPwd){
    const token = jwt.sign({username: user.username, id: user._id}, process.env.JWT_TOKEN_SECRET) // Se crea un token con el username del usuario
    res.status(200).send({token})
  }

  else
    res.status(401).send('Invalid username or password')
})

module.exports = userRouter