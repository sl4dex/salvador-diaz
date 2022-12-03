import React from 'react'
import { Link } from 'react-router-dom'
import { NavDiv } from '../assets/Nav.css'

const Nav = () => { 
  return (
    <NavDiv>
      <Link to={'/'}>Home</Link>
      <Link to={'/memes'}>Memes</Link>
      <Link to={'/forum'}>Forum</Link>
      <Link to={'/register'}>Sign up</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/logout'}>Log out</Link>
    </NavDiv>
  )
}

export default Nav