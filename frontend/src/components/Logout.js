import React from 'react'

const Logout = () => { 
  function handleLogout() {
    window.localStorage.removeItem('loggedUser')
    window.location.reload()
  }
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout