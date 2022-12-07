import React from 'react'
import { SmallerOrangeBtn } from '../assets/OrangeBtn.css'


const Logout = () => { 
  const user = JSON.parse(window.localStorage.getItem('loggedUser')).username
  console.log(user);

  function handleLogout() {
    window.localStorage.removeItem('loggedUser')
    window.location.reload()
  }
  return (
    // aligns the button to the right with flexbox
    <div style={{'marginLeft': 'auto'}}> 
      logged in as <b style={{'paddingRight': '8px'}}>{user}</b><SmallerOrangeBtn onClick={handleLogout}>Logout</SmallerOrangeBtn>
    </div>
  )
}

export default Logout