import React from 'react'
import { HContentDiv } from '../assets/HomeContent.css'
import { OrangeBtn } from '../assets/Buttons'
import MyCurriculum from './MyCurriculum'
import ThisWebsite from './ThisWebsite'
import { useState } from 'react'


// Renderiza condicionalmente Mi CV o informacion sobre la website segun el boton que se aprete
const HomeContent = () => { 
  const [section, setSection] = useState('myCurriculum')
  return (
    <HContentDiv>
      <div className='homeOrangeButtons'>
        <OrangeBtn id='my-cv-button' onClick={() => setSection('myCurriculum')}>My Curriculum</OrangeBtn>
        <OrangeBtn id='this-website-button' onClick={() => setSection('thisWbesite')}>This Website</OrangeBtn>
      </div>
      
      {section === 'myCurriculum' ? <MyCurriculum /> : <ThisWebsite />}
    </HContentDiv>
  )
}

export default HomeContent