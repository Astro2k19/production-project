import axios from 'axios'
import { USER_AUTH_DATA_KEY } from 'shared/const/localStorage'

// need fix for dynamic authorization header
export const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    authorization: localStorage.getItem(USER_AUTH_DATA_KEY)
  }
})
console.log(localStorage.getItem(USER_AUTH_DATA_KEY))
