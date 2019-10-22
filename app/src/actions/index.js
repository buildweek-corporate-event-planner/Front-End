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
          localStorage.setItem("token", response.data.token)
          dispatch({type: LOGIN_SUCCESS})
          history.push('/dashboard')
     })
     .catch(error => console.log(error.response))
}



// * REGISTER ACTION CREATOR 
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS' 
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = (registerUser, history) => (dispatch) => {
     dispatch({type: REGISTER_START})
     axios.post("https://bw-corporate-event-planner.herokuapp.com/api/auth/register", registerUser)
     .then(response => {
          console.log(response)
          dispatch({type:REGISTER_SUCCESS})
          history.push('/login')
     })
     .catch(error => {
          console.log(error)
          dispatch({type:REGISTER_FAILURE})
     })
}

// * NEW EVENT ACTION CREATOR
export const NEW_EVENT_START = "NEW_EVENT_START"
export const NEW_EVENT_SUCCESS = "NEW_EVENT_SUCCESS"
export const NEW_EVENT_FAILURE = "NEW_EVENT_FAILURE"

export const addEvent = (makeEvent, history) => (dispatch) => {
     dispatch({type: NEW_EVENT_START })
     axiosWithAuth()
     .post('/api/events', makeEvent)
     .then(response => {
          console.log(response)
          dispatch({type: NEW_EVENT_SUCCESS})
          history.push('/dashboard')
     })
     .catch(error => {
          console.log(error)
          dispatch({type: NEW_EVENT_FAILURE})
     })
}

// * TODO LIST ACTION CREATOR
export const TODO_START = "TODO_START"
export const TODO_SUCCESS = "TODO_SUCCESSS"
export const TODO_FAILURE = "TODO_FAILURE"

export const addTodo = (todoItem) => (dispatch) => {
     dispatch({type: TODO_START})
     axiosWithAuth()
     .post('', todoItem)
     .then(response => {
          console.log(response)
          dispatch({ type: TODO_SUCCESS })
     })
     .catch(error => {
          console.log(error)
          dispatch({ type: TODO_FAILURE })
     })
}

// * GET EVENT BY EVENT ID ACTION CREATOR
     // if the data comes back as eventName Halloween Party - $250 budget = seed data is working 



// have action and reducers for all of the get/posts/puts/deletes - ~30 endpoints





// TODO - render on dashboard => render on card => render on individual card => render on updateForm 
// TODO - updateForm for todolist, shopping, events 


// simple axios post to create new events
// to show the other events requires an axios call a component 