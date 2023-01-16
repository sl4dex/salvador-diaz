import React from 'react'
import { useState } from 'react'
import userService from '../services/users'
import { useDispatch } from 'react-redux'
import { setNotification, clearNotification } from '../redux/notificationSlice'
import { PageContent } from '../assets/PageContent.css'
import { AuthDiv } from '../assets/AuthDiv.css'
import { SmallerOrangeBtn } from '../assets/Buttons'
import { useNavigate } from 'react-router-dom'

const Login = ({ setLogged }) => { 
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    try{
      e.preventDefault()
      const response = await userService.login({username, password})
      window.localStorage.setItem('loggedUser', JSON.stringify(response)) 
      setLogged(true)

      dispatch(setNotification({ type: 'success', message: 'Login successful' }))
      setTimeout(() => {
        dispatch(clearNotification())
      } , 2500)
      navigate('/')
    } catch (err) {
      dispatch(setNotification({ type: 'error', message: err.response.data }))
      setTimeout(() => {
        dispatch(clearNotification())
      }, 2500)
      setPassword('')
    }
  }
  return ( 
    <PageContent>
      <AuthDiv>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="name" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <SmallerOrangeBtn type="submit">Login</SmallerOrangeBtn>
        </form>
      </AuthDiv>
    </PageContent>
  )
}

export default Login