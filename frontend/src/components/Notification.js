import React from 'react'
import { useSelector } from 'react-redux'
import { NotificationDiv } from '../assets/Notification.css'

const Notification = () => {
  const msg = useSelector(state => state.notification.message)
  const type = useSelector(state => state.notification.type)
  return (
    <NotificationDiv type={type}>
      {msg}
    </NotificationDiv>
  )
}

export default Notification