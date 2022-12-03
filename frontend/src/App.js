import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Memes from './components/Memes'
import Register from './components/Register'

import Html from './assets/Html.css'

const App = () => {
  return (
    <>
      <Html />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App