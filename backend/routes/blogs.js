const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/Blog')
const  authenticateToken = require('../middleware/authToken.js')

blogRouter.get('/blogs', async (req, res) => { 
  const blogs = await Blog.find()
  res.json(blogs)
})

blogRouter.post('/blogs', async (req, res) => {
  const decodedToken = authenticateToken(req)
  if (decodedToken === 'token none')
    return res.status(401).json({error: 'token missing'})
  if (decodedToken === 'token invalid')
    return res.status(401).json({error: 'token invalid'})
  const blog = new Blog(req.body)
  const savedBlog = await blog.save()
  res.json(savedBlog)
})

module.exports = blogRouter