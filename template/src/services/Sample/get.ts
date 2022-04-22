import axios from 'axios'
import { API } from '@config'

export const randomApi = async (companyId: number) =>
  axios.get(`${API}/api/random/${companyId}`).then(response => response)
