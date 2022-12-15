/* eslint-disable no-undef */
import React from 'react'
import { useState } from 'react'
import { PageContent } from '../assets/PageContent.css'
import { SmallerOrangeBtn } from '../assets/OrangeBtn.css'
import { MemesDiv } from '../assets/Memes.css' 
import a from '../assets/images/memes/C.jpg'
import b from '../assets/images/memes/auth.png'
import c from '../assets/images/memes/containers.png'
import d from '../assets/images/memes/data_pipeline.png'
import e from '../assets/images/memes/dependency.png'
import f from '../assets/images/memes/localhost.png'
import g from '../assets/images/memes/modern_osi_model.png'
import h from '../assets/images/memes/networking_problems.png'
import i from '../assets/images/memes/nodemodules.png'
import j from '../assets/images/memes/overengineering.png'

const Memes = () => {
  const memes = [a, b, c, d, e, f, g, h, i, j]
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10))

  return (
    <PageContent>
      <MemesDiv>
        <h1>Memes</h1>
        <img src={memes[randomNumber]} />
        <br />
      </MemesDiv>
      <SmallerOrangeBtn onClick={() => setRandomNumber(Math.floor(Math.random() * 10))}>Random Meme</SmallerOrangeBtn>
    </PageContent>
  )
}

export default Memes