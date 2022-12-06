import React from 'react'
import { useState } from 'react'
import userService from '../services/users'
import { useDispatch } from 'react-redux'
import { setNotification, clearNotification } from '../redux/notificationSlice'
import { PageContent } from '../assets/PageContent.css'

const Login = ({ setLogged }) => { 
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    try{
      e.preventDefault()
      console.log('1')
      const response = await userService.login({username, password})
      console.log('2')
      window.localStorage.setItem('loggedUser', JSON.stringify(response)) 
      console.log('3')
      setLogged(true)
      console.log('Login successful', response)
      dispatch(setNotification({ type: 'success', message: 'Login successful' }))
      setTimeout(() => {
        dispatch(clearNotification())
      } , 2500)
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
        <button type="submit">Login</button>
      </form>
    </PageContent>
  )
}

export default Login