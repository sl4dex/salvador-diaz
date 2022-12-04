import React from 'react'
import { useState } from 'react'
import userService from '../services/users'
import { PageContent } from '../assets/PageContent.css'

const Register = () => { 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    try{
      e.preventDefault()
      const response = await userService.register({username, password})
      console.log(response)
    } catch (err) {
      console.log('Error registering user: ', err)
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