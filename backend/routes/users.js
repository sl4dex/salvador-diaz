const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userRouter = express.Router()

userRouter.get('/users', async (req, res) => {
  const users = await User.find()
  res.status(200).send(users)
})

userRouter.post('/register', async (req, res) => { 
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
    if (err.message.includes('expected `username` to be unique'))
      res.status(400).json({error: 'Username already taken'})
    res.status(400).end()
  }
})

userRouter.post('/login', async (req, res) => {
  const user = await User.findOne({username: req.body.username}) // Se busca en la db un usuario con el mismo username que el del request
  if (!user)
    return res.status(401).send('Invalid username or password')
  const validPwd = await bcrypt.compare(req.body.password, user.passwordHash) // Se compara el passwordHash de la db con el passwordHash del request
  if (validPwd){
    const token = jwt.sign({username: user.username, id: user._id}, process.env.JWT_TOKEN_SECRET) // Se crea un token con el username del usuario
    res.status(200).send({token, username: user.username})
  }
  else
    res.status(401).send('Invalid username or password')
})

module.exports = userRouter