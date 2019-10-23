import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'



// * LOGIN ACTION CREATOR
export const REQUEST_START = "REQUEST_START"
export const REQUEST_FAILURE = "REQUEST_FAILURE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const login = (credentials, history) => (dispatch) => {
     dispatch({ type: REQUEST_START })
     axiosWithAuth()
     .post('https://bw-corporate-event-planner.herokuapp.com/api/auth/login', credentials)
     .then(response => {
          console.log(response)
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("id", response.data.userid)
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
     .post('https://bw-corporate-event-planner.herokuapp.com/api/events', makeEvent)
     .then(response => {
          console.log(response)
          history.push('/dashboard')
          dispatch({ type: NEW_EVENT_SUCCESS })
     })
     .catch(error => {
          console.log(error)
          dispatch({type: NEW_EVENT_FAILURE})
     })
}

// * GET EVENT BY EVENT ID ACTION CREATOR
// if the data comes back as eventName Halloween Party - $250 budget = seed data is working 
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const fetchData = () => (dispatch) => {
     dispatch({type: FETCH_START})
     let id = parseInt(localStorage.getItem('id'))
     axiosWithAuth()
     .get(`https://bw-corporate-event-planner.herokuapp.com/api/events/user/${id}`)
     .then(response => {
          console.log(response)
          dispatch({type: FETCH_SUCCESS, payload: response.data})
     })
     .catch(error => {
          console.log(error)
          dispatch({ type: FETCH_FAILURE })
     })
}




// * SINGLE EVENT ACTION CREATOR
export const SINGLE_EVENT_START = "SINGLE_EVENT_START"
export const SINGLE_EVENT_SUCCESS = "SINGLE_EVENT_SUCCESS"
export const SINGLE_EVENT_FAILURE = "SINGLE_EVENT_FAILURE"

export const fetchSingleEvent = (id) => (dispatch) => {
     dispatch({type: SINGLE_EVENT_START})
     axiosWithAuth()
     .get(`https://bw-corporate-event-planner.herokuapp.com/api/events/${id}`)
     .then(response => {
          console.log(response.data)
          dispatch({ type: SINGLE_EVENT_SUCCESS, payload: response.data })
     })
     .catch(error => {
          console.log(error)
          dispatch({ type: SINGLE_EVENT_FAILURE })
     })
}

// * EDIT EVENT ACTION CREATOR
export const EDIT_START = "EDIT_START"
export const EDIT_SUCCESS = "EDIT_SUCCESS"
export const EDIT_FAILURE = "EDIT_FAILURE"

export const editEvent = (updateEvent, id, history) => (dispatch) => {
     dispatch({type: EDIT_START})
     axiosWithAuth()
     .put(`https://bw-corporate-event-planner.herokuapp.com/api/events/${id}`, updateEvent)
     .then(response => {
          console.log(response)
          dispatch({ type: EDIT_SUCCESS })
          history.push('/dashboard')
     })
     .catch(error => {
          console.log(error)
          dispatch({ type: EDIT_FAILURE })
     })
}

// * DELETE EVENT ACTION CREATOR
export const DELETE_START = "DELETE_START"
export const DELETE_SUCCESS = "DELETE_SUCCESS"

export const deleteEvent = (id, history) => (dispatch) => {
     dispatch({ type:DELETE_START })
     axiosWithAuth()
     .delete(`https://bw-corporate-event-planner.herokuapp.com/api/events/${id}`)
     .then(response => {
          console.log(response)
          dispatch({ type: DELETE_SUCCESS })
          history.push('/dashboard')
     })
     .catch(error => {
          console.log(error)
     })
}


// * TODO LIST ACTION CREATOR
export const TODO_START = "TODO_START"
export const TODO_SUCCESS = "TODO_SUCCESS"
export const TODO_FAILURE = "TODO_FAILURE"

export const addTodo = (todoItem) => (dispatch) => {
     dispatch({ type: TODO_START })
     console.log(todoItem)
     axiosWithAuth()
          .post('https://bw-corporate-event-planner.herokuapp.com/api/todo/', todoItem)
          .then(response => {
               console.log(response)
               dispatch({ type: TODO_SUCCESS })
          })
          .catch(error => {
               console.log(error)
               dispatch({ type: TODO_FAILURE })
          })
}

// * RENDERING TODO LIST ACTION CREATOR
export const TODO_LIST_START = "TODO_LIST_START"
export const TODO_LIST_SUCCESS = "TODO_LIST_SUCCESS"
export const TODO_LIST_FAILURE = "TODO_LIST_FAILURE"

export const fetchTodo = (id) => dispatch => {
     dispatch({ type: TODO_LIST_START })
     axiosWithAuth()
          .get(`https://bw-corporate-event-planner.herokuapp.com/api/todo/events/${id}`)
          .then(response => {
               console.log(response)
               dispatch({ type: TODO_LIST_SUCCESS, payload: response.data })
          })
          .catch(error => {
               console.log(error)
               dispatch({ type: TODO_LIST_FAILURE })
          })
}