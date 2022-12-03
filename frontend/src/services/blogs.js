import axios from 'axios'

const baseUrl = '/api'

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/blogs`)
  return response.data
}

const create = async (newBlog) => {
  const response = await axios.post(`${baseUrl}/blogs`, newBlog)
  return response.data
}

export default { getAll, create }