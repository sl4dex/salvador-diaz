import React from 'react'
import { useState } from 'react'
import userService from '../services/users'
import { PageContent } from '../assets/PageContent.css'
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
      dispatch(setNotification({type: 'error', message: err.response.data.error}))
      setTimeout(() => dispatch(clearNotification()), 3000)
      setPassword('')
    }
  }
  return (
    <PageContent>
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
        <button type="submit">Sign up</button>
      </form>
    </PageContent>
  )
}

export default Register