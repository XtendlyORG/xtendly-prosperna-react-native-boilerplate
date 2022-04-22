import axios from 'axios'
import { API } from '@config'
import { Login, Logout } from '@types'

export const loginApi = async (body: Login) =>
  axios.post(`${API}/api/login`, body).then(response => response)

export const logOutApi = async (body: Logout) =>
  axios.post(`${API}/api/logout`, body).then(response => response)
