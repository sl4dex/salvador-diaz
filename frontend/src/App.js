import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Memes from './components/Memes'
import Register from './components/Register'
import Login from './components/Login'
import Blogs from './components/Blogs'

import Html from './assets/Html.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [logged, setLogged] = useState(null)

  // si la variable loggedUser existe en el localStorage, entonces el usuario esta logueado (medio flojo)
  useEffect (() => { 
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      setLogged(true)
    }
  }, [])

  return (
    <>
      <Html />
      <Nav logged={logged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Blogs />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLogged={setLogged} />} />
      </Routes>
    </>
  )
}

export default App