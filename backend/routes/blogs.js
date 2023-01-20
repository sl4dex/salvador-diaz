const express = require('express')
const blogRouter = express.Router()
const Blog = require('../models/Blog')
const  authenticateToken = require('../middleware/authToken.js')

blogRouter.get('/blogs', async (req, res) => { 
  const blogs = await Blog.find().populate('user')
  res.json(blogs)
})

blogRouter.get('/blogs/:id', async (req, res) => {
  let blog = await Blog.findById(req.params.id).populate('user') // req. params.id es la parte de la url que va despues del /:
  if (!blog)
    return res.status(404).end() // si no hay blog devolver 404
  
  const tokResponse = await authenticateToken(req)
  if (!tokResponse)
    return res.status(200).json({ blog , tokenValid: false })
  // checks which comments are owned by the user sending this request
  const commentsWithOwner = blog.comments.map(c => (
    c.user === tokResponse.user.username ? 
      {user: c.user, comment: c.comment, _id: c._id.toString(), isOwner: true} : 
      {user: c.user, comment: c.comment, _id: c._id.toString(), isOwner: false}))
    
  blog = {title: blog.title, url: blog.url, content: blog.content, comments: commentsWithOwner, user: {username: blog.user.username, id: blog.user.id.toString()}, id: blog.id.toString()}
  // 👆 tuve que hacer esto porque 'blog.comments = commentsWithOwner' no actualizaba blog.comments, no logre saber por que
  if (!tokResponse.tokenValid)
    return res.status(200).json({ blog , tokenValid: false }) // si el token no es valido, devolver el blog con tokenValid false
  
  if (tokResponse.user.id !== blog.user.id) // finalmente checkeo que el user con token que hizo el request sea el mismo que creo el blog
    return res.status(200).json({blog, tokenValid: false}) 

  return res.status(200).json({blog, tokenValid: true})
})

blogRouter.post('/blogs', async (req, res) => {
  try {
    const tokResponse = await authenticateToken(req) // verifico el token y si es valido devuelvo el user que lo creo
    if (!tokResponse.tokenValid)
      return res.status(401).end()
    
    if (req.body.content.length > 2000 || req.body.title.length > 75)
      return res.status(413).end()
    
    const userPosting = tokResponse.user
    const blog = new Blog({...req.body, user: userPosting}) // creo el blog agragando la propiedad user: el user que lo creó
    const savedBlog = await blog.save()
    res.status(200).json(savedBlog)
  } catch (err) {
    if (err.message.includes('Path `content` is required'))
      res.status(400).json({error: 'Content is required'})
    else if (err.message.includes('Path `title` is required'))
      res.status(400).json({error: 'Title is required'})
    else {
      console.log(err.message)
      res.status(400).json({error: 'Something went wrong :('})
    }
  }
})

blogRouter.delete('/blogs/:id', async (req, res) => {
  try {
    const tokResponse = await authenticateToken(req)
    if (!tokResponse.tokenValid)
      return res.status(401).end()
    const del = await Blog.findByIdAndDelete(req.params.id) // req. params.id es la parte de la url que va despues del /:
    if (!del)
      return res.status(404).end()
    res.status(204).end()
  } catch (err) {
    console.log(err.message)
    res.status(400).end()
  }
})

// 👇 blog comments

blogRouter.post('/blogs/:id/comments', async (req, res) => {
  try {
    const newcomment = req.body.comment
  
    const tokResponse = await authenticateToken(req)
    if (!tokResponse.tokenValid)
      return res.status(401).end()
    
    if (newcomment.length > 200)
      return res.status(413).end()
  
    const blog = await Blog.findById(req.params.id)
    if (!blog)
      return res.status(404).end()
    
    const newLength = blog.comments.push({comment: newcomment, user: tokResponse.user.username, date: new Date()}) // length of comments array
    const savedBlog = await blog.save()
    res.status(200).json(savedBlog.comments[newLength - 1]) // return last element of comments array (new comment)
  } catch (err) {
    console.log(err.message)
    res.status(400).end()
  }
})

blogRouter.put('/blogs/:id/comments', async (req, res) => {
  try {
    const tokResponse = await authenticateToken(req)
    if (!tokResponse.tokenValid)
      return res.status(401).end()
  
    const blog = await Blog.findById(req.params.id)
    if (!blog)
      return res.status(404).end()
    
    console.log(req.body.commentid);
    const updatedComments = blog.comments.filter(c => c._id.toString() !== req.body.commentid) // actualiza los comments para tener todos menos el que se envio para borrar
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {comments: updatedComments}, { new: true })
    res.status(200).json(updatedBlog.comments)
  } catch (err) {
    console.log(err)
    res.status(400).end()
  }
})

module.exports = blogRouter