import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'

export const REQUEST_START = "REQUEST_START"
export const REQUEST_FAILURE = "REQUEST_FAILURE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"


export const login = (credentials) => (dispatch) => {
     dispatch({type: LOGIN_REQUEST})
     axios.post()
}