import axios from 'axios'

const baseUrl = '/api'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/users`)
  return response.data
}

const register = async (user) => { 
  const response = await axios.post(`${baseUrl}/register`, user)
  return response.data
}

const login = async (user) => { 
  const response = await axios.post(`${baseUrl}/login`, user)
  return response.data
}

export default { getAll, register, login}