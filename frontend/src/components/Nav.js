import React from 'react'
import { Link } from 'react-router-dom'
import { NavDiv } from '../assets/Nav.css'
import Logout from './Logout'


const Nav = ({ logged }) => { 
  return (
    <NavDiv>
      <Link to={'/'}>Home</Link>
      <Link to={'/forum'}>Forum</Link>
      <Link to={'/memes'}>Memes</Link>
      {!logged && (<Link to={'/register'}>Sign up</Link>)}
      {!logged && (<Link to={'/login'}>Login</Link>)}
      {logged && (<Logout />)}
    </NavDiv>
  )
}

export default Nav