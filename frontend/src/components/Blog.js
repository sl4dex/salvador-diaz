import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import blogService from '../services/blogs'
import { PageContent } from '../assets/PageContent.css'
import { SmallerOrangeBtn } from '../assets/OrangeBtn.css'
import BlogComments from './BlogComments'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNotification, clearNotification } from '../redux/notificationSlice'


const Blog = () => {
  const [blog, setBlog] = useState([])
  const [token, setToken] = useState(false)
  const [user, setUser] = useState({}) // although I have blog state, I need another state with blog.user to display the username (why?)
  const [comments, setComments] = useState([])
  const id = useParams().blogid
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    blogService.getBlog(id).then(res => { 
      setBlog(res.blog)
      setToken(res.tokenValid) // if token is true, the frontend will display the edit and delete buttons
      setUser(res.blog.user)
      setComments(res.blog.comments)
    })
  }, [])

  async function handleDelete() { 
    try {
      if (window.confirm(`Are you sure you want to delete "${blog.title}"?`)) {
        await blogService.deleteBlog(id)
        dispatch(setNotification({type: 'success', message: `"${blog.title}" deleted`}))
        setTimeout(() => dispatch(clearNotification()), 3500)
        navigate('/forum')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <PageContent comments>
        <h1>{blog.title}</h1>
        <h3>by {user.username}</h3>
        <p style={{'whiteSpace': 'pre-line'}}>{blog.content}</p>
        {token ? (<SmallerOrangeBtn onClick={() => handleDelete()}>Delete</SmallerOrangeBtn>) : null}
      </PageContent>

      <BlogComments id={id} comments={comments} setComments={setComments} />
    </>
  )
}

export default Blog