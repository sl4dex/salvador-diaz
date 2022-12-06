import React from 'react'
import { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import { PageContent } from '../assets/PageContent.css'
import { BlogsDiv } from '../assets/BlogsDiv.css'
import { BlogFormDiv } from '../assets/BlogFormDiv.css'

const Blogs = () => {   
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [blogs, setBlogs] = useState([])

  // Cada vez que se renderiza el componente, agarra los blogs del backend
  useEffect(() => { 
    blogService.getAll().then(blogs => setBlogs(blogs))
  } , [])
  
  async function handleSubmit(e) {
    try{
      e.preventDefault()
      const response = await blogService.create({title, content})
      console.log('Blog created', response)
    } catch (err) {
      console.log('Error creating blog: ', err.response.data)
      setContent('')
    }
  }

  return ( 
    <PageContent>
      <h1>Blogs</h1>
      
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
          <button >Cancel</button>
        </form>
        <hr />
      </BlogFormDiv>
      <h2>Blog List</h2>
      <BlogsDiv>
        {blogs.map(blog => 
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>)}
      </BlogsDiv>
    </PageContent>
  )
}

export default Blogs