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
      await blogService.create({title, content})
      dispatch(setNotification({type: ' success', message: `"${title}" created`}))
      setTimeout(() => dispatch(clearNotification()), 3500)
    } catch (err) {
      dispatch(setNotification({type: 'error', message: err.message}))
      setTimeout(() => dispatch(clearNotification()), 3500)
      setTitle('') 
      setContent('')
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
            <p>{blog.content}</p>
            <SmallerOrangeBtn white onClick={() => navigate(`${blog.id}`)}>view more</SmallerOrangeBtn>
          </div>)}
      </BlogsDiv>
    </PageContent>
  )
}

export default Blogs