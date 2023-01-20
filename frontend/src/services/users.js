import axios from 'axios'

const baseUrl = '/api'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/users`)
  return response.data
}

const register = async (user) => {
  if (user.username.length < 3 || user.password.length < 3)
    throw new Error('Username and password must be at least 3 characters long')
  const response = await axios.post(`${baseUrl}/register`, user) // si hay un error, axios lo atrapa y lo envia al catch (no hace el return response.data)
  return response.data
}

const login = async (user) => { 
  const response = await axios.post(`${baseUrl}/login`, user)
  return response.data
}

export default { getAll, register, login }