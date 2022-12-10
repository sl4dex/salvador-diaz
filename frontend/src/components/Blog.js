import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import blogService from '../services/blogs'
import { PageContent } from '../assets/PageContent.css'
import { SmallerOrangeBtn } from '../assets/OrangeBtn.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNotification, clearNotification } from '../redux/notificationSlice'

const Blog = () => {
  const [blog, setBlog] = useState([])
  const [token, setToken] = useState(false)
  const [user, setUser] = useState({}) // although I have blog state, I need another state with blog.user to display the username (why?) 
  const id = useParams().blogid
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // useEffect(() => {
  //   console.log('useffect getblogid, token: ', token, 'user: ', user)

  // })
  useEffect(() => {
    blogService.getBlog(id).then(res => { 
      setBlog(res.blog)
      setToken(res.tokenValid) // if token is true, the frontend will display the edit and delete buttons
      setUser(res.blog.user)
    })
  }, [])

  async function handleDelete() { 
    if (window.confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      await blogService.deleteBlog(id)
      dispatch(setNotification({type: 'success', message: `"${blog.title}" deleted`}))
      setTimeout(() => dispatch(clearNotification()), 3500)
      navigate('/forum')
    }
  }

  return (
    <PageContent>
      <h1>{blog.title}</h1>
      <h3>by {user.username}</h3>
      <p>{blog.content}</p>
      <p>id: {id}</p>
      {token ? (<SmallerOrangeBtn onClick={() => handleDelete()}>Delete</SmallerOrangeBtn>) : null}
    </PageContent>
  )
}

export default Blog