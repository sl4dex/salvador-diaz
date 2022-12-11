import React from 'react'
import { useState } from 'react'
import { CommentsDiv } from '../assets/Comments.css'
import { SmallerOrangeBtn } from '../assets/OrangeBtn.css'
import blogService from '../services/blogs'
import { setNotification, clearNotification } from '../redux/notificationSlice'
import { useDispatch } from 'react-redux'

const BlogComments = ({ id, comments, setComments }) => { 
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  async function handleSubmit(e) { 
    try {
      e.preventDefault()
      if (comment.length > 200) {
        dispatch(setNotification({type: 'error', message: 'Comment cannnot have more than 200 characters'}))
        setTimeout(() => dispatch(clearNotification()), 3500)
        return null
      }
      const regex = /\n\n+/g
      const commentHandledNewlines = comment.replace(regex, '\n\n') // si hay dos o mas saltos de linea, se reemplazan por uno solo 
      await blogService.addComment(id, {comment: commentHandledNewlines})
      dispatch(setNotification({type: 'success', message: 'comment added successfully'}))
      setTimeout(() => dispatch(clearNotification()), 2000)
      setComment('')
      const response = await blogService.getBlog(id) // to check ownership of new comment
      setComments(response.blog.comments)
    } catch (err) {
      dispatch(setNotification({type: 'error', message: err.message}))
      setTimeout(() => dispatch(clearNotification()), 3500)
    }
  }

  async function handleDelete(e) { 
    try {
      const commentid = e.currentTarget.id
      if (window.confirm('Are you sure you want to delete you comment?')) {
        const response = await blogService.deleteComment(id, commentid)
        dispatch(setNotification({type: 'success', message: 'comment deleted successfully'}))
        setTimeout(() => dispatch(clearNotification()), 3500)
        setComments(response)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <CommentsDiv>
      <h2>comments</h2>
      <form onSubmit={handleSubmit}>
        <textarea type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Share a comment!" />
        <SmallerOrangeBtn type='submit'>Submit</SmallerOrangeBtn>
      </form>
      {comments.length ? 
        comments.map(c => (
          <div key={c._id}>
            <p><b>{c.user}</b></p>
            <p style={{'whiteSpace': 'pre-line'}}>{c.comment}</p>
            {c.isOwner ? (<SmallerOrangeBtn id={c._id} onClick={(e) => handleDelete(e)}>Delete</SmallerOrangeBtn>) : null}
          </div>
        )) :
        (<p>No comments yet</p>)
      }
    </CommentsDiv>
  )
}

export default BlogComments