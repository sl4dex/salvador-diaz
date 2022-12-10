const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/Blog')
const  authenticateToken = require('../middleware/authToken.js')

blogRouter.get('/blogs', async (req, res) => { 
  const blogs = await Blog.find().populate('user')
  res.json(blogs)
})

blogRouter.get('/blogs/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('user') // req. params.id es la parte de la url que va despues del /:
  if (!blog)
    return res.status(404).end() // si no hay blog devolver 404

  const tokResponse = await authenticateToken(req)
  console.log('token is valid: ', tokResponse.tokenValid)
  if (!tokResponse.tokenValid)
    return res.status(200).json({ blog , tokenValid: false }) // si el token no es valido, devolver el blog con tokenValid false
  
  if (tokResponse.user.id !== blog.user.id) // finalmente checkeo que el user con token que hizo el request sea el mismo que creo el blog
    return res.status(200).json({blog, tokenValid: false}) 
  
  return res.status(200).json({blog, tokenValid: true})
})

blogRouter.post('/blogs', async (req, res) => {
  const tokResponse = await authenticateToken(req) // verifico el token y si es valido devuelvo el user que lo creo
  if (!tokResponse.tokenValid)
    return res.status(401).end()
  
  const userPosting = tokResponse.user
  const blog = new Blog({...req.body, user: userPosting}) // creo el blog agragando la propiedad user: el user que lo creó
  const savedBlog = await blog.save()
  res.status(200).json(savedBlog)
})

blogRouter.delete('/blogs/:id', async (req, res) => {
  const tokResponse = await authenticateToken(req)
  if (!tokResponse.tokenValid)
    return res.status(401).end()
  const del = await Blog.findByIdAndDelete(req.params.id) // req. params.id es la parte de la url que va despues del /:
  if (!del)
    return res.status(404).end()
  res.status(204).end()
})

module.exports = blogRouter