import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import blogService from '../services/blogs'
import { PageContent } from '../assets/PageContent.css'
import { SmallerOrangeBtn } from '../assets/OrangeBtn.css'
import { CommentsDiv } from '../assets/Comments.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNotification, clearNotification } from '../redux/notificationSlice'


const Blog = () => {
  const [blog, setBlog] = useState([])
  const [token, setToken] = useState(false)
  const [user, setUser] = useState({}) // although I have blog state, I need another state with blog.user to display the username (why?)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const id = useParams().blogid
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    console.log('comments: ', comments)

  })
  useEffect(() => {
    blogService.getBlog(id).then(res => { 
      setBlog(res.blog)
      setToken(res.tokenValid) // if token is true, the frontend will display the edit and delete buttons
      setUser(res.blog.user)
      setComments(res.blog.comments)
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

  async function handleSubmit(e) { 
    try {
      e.preventDefault()
      if (comment.length > 200) {
        dispatch(setNotification({type: 'error', message: 'Comment cannnot have more than 200 characters'}))
        setTimeout(() => dispatch(clearNotification()), 3500)
        return null
      }
      const response = await blogService.addComment(id, {comment})
      setComments(response.comments) // !!! No se actualizan los comments con esto !!!
      dispatch(setNotification({type: 'success', message: 'comment added successfully'}))
      setTimeout(() => dispatch(clearNotification()), 2000)
      setComment('')
      console.log(response)
      console.log('res comments ', response.comments)
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
        <p>id: {id}</p>
        {token ? (<SmallerOrangeBtn onClick={() => handleDelete()}>Delete</SmallerOrangeBtn>) : null}
        
      </PageContent>
      <CommentsDiv>
        <h2>comments</h2>
        <form onSubmit={handleSubmit}>
          <textarea type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Share a comment!" />
          <SmallerOrangeBtn type='submit'>Submit</SmallerOrangeBtn>
        </form>
        {comments.length ? 
          blog.comments.map(c => (
            <div key={c._id}>
              <p><b>{c.user}</b></p>
              <p>{c.comment}</p>
            </div>
          )) :
          (<p>No comments yet</p>)
        }
      </CommentsDiv>
    </>
  )
}

export default Blog