const express = require('express')
const User = require('../models/User')
const Blog = require('../models/Blog')

const testingRouter = express.Router()

testingRouter.post('/reset', async (req, res) => {
  await User.deleteMany({})
  await Blog.deleteMany({})

  res.status(204).end()
})

module.exports = testingRouter