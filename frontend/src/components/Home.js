import React from 'react'
import { OrangeWelcome } from '../assets/OrangeWelcome.css'
import yo from '../assets/images/yo.png'
import HomeContent from './HomeContent'

// Rectangulo naranja abajo del nav
const Home = () => {

  return (
    <div>
      <OrangeWelcome>
        <div>
          <img src={yo} alt='me' />
        </div>
        <div className='title-and-links'>
          <h1>Salvador Diaz</h1>
          <a href='https://github.com/sl4dex' target="_blank" rel="noopener noreferrer">My Github</a>
          <a href='https://www.linkedin.com/in/salvador-d' target="_blank" rel="noopener noreferrer">My LinkedIn</a>
        </div>
      </OrangeWelcome>
      <HomeContent />
    </div>
  )
}

export default Home