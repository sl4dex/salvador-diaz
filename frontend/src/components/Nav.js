import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MyNav } from '../assets/Nav.css'

const Nav = ({ logged }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const [smallDevice, setSmallDevice] = useState(
    window.matchMedia('(max-width: 485px)').matches
  )
  useEffect(() => {
    window
      .matchMedia('(max-width: 485px)')
      .addEventListener('change', e => setSmallDevice( e.matches ))
  }, [])
  if (smallDevice) {
    return (
      <MyNav dropdown={true} >
        <button className='menu' onClick={handleOpen} />
        {open ? (
          <ul>
            <li><Link to={'/'} onClick={handleOpen}>Home</Link></li>
            <li><Link to={'/forum'} onClick={handleOpen}>Forum</Link></li>
            <li><Link to={'/memes'} onClick={handleOpen}>Memes</Link></li>
            <li><Link to={'/other-websites'} onClick={handleOpen}>Other Websites</Link></li>
            {!logged && (<li><Link to={'/register'} onClick={handleOpen}>Sign up</Link></li>)}
            {!logged && (<li><Link to={'/login'} onClick={handleOpen}>Login</Link></li>)}
          </ul>
        ) : null}
      </MyNav>
    )
  } else {
    return (
      <MyNav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/forum'}>Forum</Link></li>
          <li><Link to={'/memes'}>Memes</Link></li>
          <li><Link to={'/other-websites'}>Other Websites</Link></li>
          {!logged && (<li><Link to={'/register'}>Sign up</Link></li>)}
          {!logged && (<li><Link to={'/login'}>Login</Link></li>)}
        </ul>
      </MyNav>
    )
  }
}

export default Nav