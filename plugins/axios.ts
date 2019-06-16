import axios from 'axios'

export const APIurl = axios.create({
  baseURL: 'https://conduit.productionready.io/api'
})

export async function fetchArticles() {
  const res = await APIurl.get('/articles')
  return res.data
} 