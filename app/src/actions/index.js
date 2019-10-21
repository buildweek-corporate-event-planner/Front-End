import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'


// * LOGIN ACTION CREATOR
export const REQUEST_START = "REQUEST_START"
export const REQUEST_FAILURE = "REQUEST_FAILURE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const login = (credentials, history) => (dispatch) => {
     dispatch({ type: REQUEST_START })
     axiosWithAuth()
     .post('/api/auth/login', credentials)
     .then(response => {
          console.log(response)
          localStorage.setItem("token", response.data)
          dispatch({type: LOGIN_SUCCESS})
          history.push("/")
     })
     .catch(error => console.log(error.response))
}



// * REGISTER ACTION CREATOR 
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS' 
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = (registerUser) => (dispatch) => {
     dispatch({type: REGISTER_START})
     axios.post("", registerUser)
     .then(response => {
          console.log(response)
          dispatch({type:REGISTER_SUCCESS})
     })
     .catch(error => {
          console.log(error)
          dispatch({type:REGISTER_FAILURE})
     })
}