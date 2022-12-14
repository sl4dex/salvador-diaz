import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const ThisWebsite = () => {
  const [readme, setReadme] = useState('')

  // Gets README.md from my github repo
  async function getReadme() {
    const readme = await axios.get('https://api.github.com/repos/sl4dex/salvador-diaz/readme')
    const readmeContent = await axios.get(readme.data.download_url)
    setReadme(readmeContent.data)
  }
  getReadme()
  
  return ( 
    <div>
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  )
}

export default ThisWebsite