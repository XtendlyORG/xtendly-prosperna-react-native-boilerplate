import axios from 'axios'
import { API } from '@config'
import { Login } from '@types'

export const loginApi = async (body: Login) =>
  axios.post(`${API}/api/login`, body).then(response => response)
