import React from 'react'
import { useState } from 'react'
import userService from '../services/users'
import { PageContent } from '../assets/PageContent.css'
import { AuthDiv } from '../assets/AuthDiv.css'
import { SmallerOrangeBtn } from '../assets/Buttons'
import { setNotification, clearNotification } from '../redux/notificationSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Register = () => { 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch =  useDispatch()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    try{
      e.preventDefault()
      await userService.register({username, password})
      dispatch(setNotification({type: 'success', message: 'User registered, please log in'}))
      setTimeout(() => dispatch(clearNotification()), 3000)
      navigate('/login')
    } catch (err) {
      if (!err.response) {
        dispatch(setNotification({type: 'error', message: err.message}))
        setTimeout(() => dispatch(clearNotification()), 3000)
      }
      else {
        dispatch(setNotification({type: 'error', message: err.response.data.error}))
        setTimeout(() => dispatch(clearNotification()), 3000)
        setPassword('')
      }
    }
  }
  return (
    <PageContent>
      <AuthDiv>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="name" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <SmallerOrangeBtn type="submit" id='signup-button'>Sign up</SmallerOrangeBtn>
        </form>
      </AuthDiv>
    </PageContent>
  )
}

export default Register