import axios from 'axios'

const baseUrl = '/api'

function setAuth() {
  const token = JSON.parse(localStorage.getItem('loggedUser')).token
  return { headers: { Authorization: `Bearer ${token}` } }
}

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/blogs`)
  console.log('response', response)
  return response.data
}

const create = async (newBlog) => {
  const response = await axios.post(`${baseUrl}/blogs`, newBlog, setAuth())
  return response.data
}

export default { getAll, create }