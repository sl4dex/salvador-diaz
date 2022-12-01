import React from 'react'
import { HContentDiv } from '../assets/HomeContent.css'
import { OrangeBtn } from '../assets/OrangeBtn.css'
import MyCurriculum from './MyCurriculum'
import ThisWebsite from './ThisWebsite'
import { useState } from 'react'


const HomeContent = () => { 
  const [section, setSection] = useState('myCurriculum')
  return (
    <HContentDiv>
      <div style={{'display': 'flex', 'gap': '10px', 'paddingBottom': '20px'}}>
        <OrangeBtn onClick={() => setSection('myCurriculum')}>My Curriculum</OrangeBtn>
        <OrangeBtn onClick={() => setSection('thisWbesite')}>This Website</OrangeBtn>
      </div>
      
      {section === 'myCurriculum' ? <MyCurriculum /> : <ThisWebsite />}
    </HContentDiv>
  )
}

export default HomeContent