const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/Blog')
const  authenticateToken = require('../middleware/authToken.js')

blogRouter.get('/blogs', async (req, res) => { 
  const blogs = await Blog.find()
  res.json(blogs)
})

blogRouter.post('/blogs', async (req, res) => {
  const tokResponse = await authenticateToken(req)
  if (tokResponse !== 'token valid')
    return res.status(401).json({error: tokResponse})
  
  const blog = new Blog(req.body)
  const savedBlog = await blog.save()
  res.status(200).json(savedBlog)
  
})

module.exports = blogRouter