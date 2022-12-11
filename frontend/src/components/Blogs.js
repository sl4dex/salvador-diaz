import React from 'react'
import { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import { PageContent } from '../assets/PageContent.css'
import { BlogsDiv } from '../assets/BlogsDiv.css'
import { BlogFormDiv } from '../assets/BlogFormDiv.css'
import { SmallOrangeBtn, SmallerOrangeBtn } from '../assets/OrangeBtn.css'
import { useDispatch } from 'react-redux'
import { setNotification, clearNotification } from '../redux/notificationSlice'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {   
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [blogs, setBlogs] = useState([])
  const [showForm, setShowForm] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Cada vez que se renderiza el componente, agarra los blogs del backend
  useEffect(() => { 
    blogService.getAll().then(blogs => setBlogs(blogs))
  } , [])
  
  async function handleSubmit(e) {
    try{
      e.preventDefault()
      if (content.length > 2000 || title.length > 75) {
        dispatch(setNotification({type: 'error', message: 'Title and content must be less than 75 and 2000 characters respectively'}))
        setTimeout(() => dispatch(clearNotification()), 4500)
        return null
      }
      const regex = /\n\n+/g
      const contentHandledNewlines = content.replace(regex, '\n\n') // si hay dos o mas saltos de linea, se reemplazan por uno solo 
      const createdBlog = await blogService.create({title, content: contentHandledNewlines})
      dispatch(setNotification({type: 'success', message: `"${title}" created`}))
      setTimeout(() => dispatch(clearNotification()), 3500)
      setBlogs(blogs.concat(createdBlog))
      setShowForm(false)
      setTitle('')
      setContent('')
    } catch (err) {
      if (err.response) {
        dispatch(setNotification({type: 'error', message: err.response.data.error}))
        setTimeout(() => dispatch(clearNotification()), 3500)
        setTitle('')
      }
      dispatch(setNotification({type: 'error', message: err.message}))
      setTimeout(() => dispatch(clearNotification()), 3500)
      setTitle('')
    }
  }

  return ( 
    <PageContent>
      <h1>Blogs</h1>
      
      {!showForm ? (<SmallOrangeBtn onClick={() => setShowForm(true)}>New Blog</SmallOrangeBtn>):
        (
          <BlogFormDiv>
            <hr />
            <h2>New Blog</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div>
                <label htmlFor="content">Content</label>
                <textarea type="text" name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
              </div>
              <button type="submit">Create</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </form>
            <hr />
          </BlogFormDiv>
        )}
      <h2>Blog List</h2>
      <BlogsDiv>
        {blogs.map(blog => 
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>by {blog.user.username}</p>
            <p>
              {blog.content.length > 70 ?
                blog.content.substring(0,80) + '...' :
                blog.content
              }
            </p>
            <SmallerOrangeBtn white onClick={() => navigate(`${blog.id}`)}>view more</SmallerOrangeBtn>
          </div>)}
      </BlogsDiv>
    </PageContent>
  )
}

export default Blogs