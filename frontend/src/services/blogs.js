import axios from 'axios'

const baseUrl = '/api'

function setAuth() {
  const localToken = localStorage.getItem('loggedUser')
  if (!localToken) // si no hay token en localstorage, no se hace el POST y se avisara al usuario
    return null
  const token = JSON.parse(localToken).token
  return { headers: { Authorization: `Bearer ${token}` } }
}

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/blogs`)
  console.log('response', response)
  return response.data
}

const getBlog = async (id) => {
  const response = await axios.get(`${baseUrl}/blogs/${id}`, setAuth())
  return response.data
}

const create = async (newBlog) => {
  const config = setAuth()
  if (!config)
    throw new Error('You must be logged in to create a blog')
  const response = await axios.post(`${baseUrl}/blogs`, newBlog, setAuth())
  return response.data
}

const deleteBlog = async (id) => {
  const config = setAuth()
  if (!config)
    throw new Error('You must be logged in to delete a blog')
  const response = await axios.delete(`${baseUrl}/blogs/${id}`, setAuth())
  return response.data
}

export default { getAll, getBlog, create, deleteBlog }