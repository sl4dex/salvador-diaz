const express = require('express')
const User = require('../models/User')

const userRouter = express.Router()

userRouter.get('/users', async (req, res) => { 
  const users = await User.find()
  res.status(200).send(users)
})

userRouter.post('/users', async (req, res) => { 
  const newUser = new User(req.body)
  const savedUser = await newUser.save()
  res.status(200).send(savedUser)
})

module.exports = userRouter