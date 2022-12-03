import React from 'react'
import { useState } from 'react'
import userService from '../services/users'

const Login = ({ setLogged }) => { 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    try{
      e.preventDefault()
      const response = await userService.login({username, password})
      window.localStorage.setItem('loggedUser', JSON.stringify(response)) 
      setLogged(true)
      console.log('Login successful', response)
    } catch (err) {
      console.log('Error logging in: ', err)
      setPassword('')
    }
  }
  return ( 
    <div>
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
    </div>
  )
}

export default Login