import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({ 
  name: 'notification',
  initialState: { 
    type: null,
    message: null,
  },
  reducers: {
    setNotification(state, action) { 
      state.type = action.payload.type
      state.message = action.payload.message
    },
    clearNotification(state) { 
      state.type = null
      state.message = null
    },
  }
})

// exporto las acciones para poder usarlas en mis componentes
export const { setNotification, clearNotification } = notificationSlice.actions
// exporto el reducer para poder llamarlo en el store
export default notificationSlice.reducer