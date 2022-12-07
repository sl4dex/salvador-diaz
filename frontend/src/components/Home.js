import React from 'react'
import { OrangeWelcome } from '../assets/OrangeWelcome.css'
import yo from '../assets/images/yo.png'
import HomeContent from './HomeContent'

const Home = () => {

  return (
    <div>
      <OrangeWelcome>
        <div>
          <img src={yo} alt='me' />
        </div>
        <div className='title-and-links'>
          <h1>Welcome to my website!</h1>
          <a href='https://github.com/sl4dex'>My Github</a>
          <a href='https://www.linkedin.com/in/salvador-d'>My LinkedIn</a>
        </div>
      </OrangeWelcome>
      <HomeContent />
    </div>
  )
}

export default Home