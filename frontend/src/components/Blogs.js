import React from 'react'
import { useState } from 'react'
import blogService from '../services/blogs'

const Blogs = () => {   
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

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
    <div>
      <h1>Blogs</h1>
      <h2>New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <input type="text" name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Blogs