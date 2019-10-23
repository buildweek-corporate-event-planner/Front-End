import {
     REQUEST_START, 
     REQUEST_FAILURE,
     LOGIN_SUCCESS,
     REGISTER_START,
     REGISTER_SUCCESS,
     REGISTER_FAILURE,
     NEW_EVENT_START,
     NEW_EVENT_SUCCESS,
     NEW_EVENT_FAILURE,
     TODO_START,
     TODO_SUCCESS,
     TODO_FAILURE,
     FETCH_START,
     FETCH_SUCCESS,
     FETCH_FAILURE, 
     SINGLE_EVENT_START,
     SINGLE_EVENT_SUCCESS,
     SINGLE_EVENT_FAILURE,
     EDIT_START,
     EDIT_SUCCESS,
     EDIT_FAILURE, 
     DELETE_START,
     DELETE_SUCCESS
} from '../actions/'



const initialState = {
     isSubmitting: false,
     isFetching: false,
     isLoggedIn: false,
     isRegistering: false,
     isCreatingEvent:false, 
     hasCreatedEvent: false,
     isCreatingTodo:false,
     hasCreatedTodo:false,
     eventList:[],
     singleEventData:[],
     isUpdating:false,
     isDeleted:false
}
export const reducer = (state = initialState, action) => {
     switch(action.type){
          case REQUEST_START:
               return{
                    ...state,
                    isFetching:true
               }
          case REQUEST_FAILURE: 
               return{
                    ...state,
                    isFetching:false
               }
          case LOGIN_SUCCESS:
               return{
                    ...state,
                    isRegistering: false,
                    isFetching:false,
                    isLoggedIn:true
               }
          case REGISTER_START:
               return{
                    ...state,
                    isRegistering:true, 
                    isSubmitting: false
               }
          case REGISTER_SUCCESS:
               return{
                    ...state,
                    isRegistering: false,
                    isSubmitting: true
               }
          case REGISTER_FAILURE:
               return{
                    ...state,
                    isRegistering: false,
                    isSubmitting: false
               }
          case NEW_EVENT_START:
               return{
                    ...state,
                    isFetching: true, 
                    hasCreatedEvent: false,
                    isCreatingEvent: true
               }
          case NEW_EVENT_SUCCESS:
               return{
                    ...state,
                    isFetching: false,
                    hasCreatedEvent: true,
                    isCreatingEvent: false
               }
          case NEW_EVENT_FAILURE:
               return{
                    ...state,
                    isFetching: false,
                    hasCreatedEvent: false,
                    isCreatingEvent: false
               }
          case TODO_START:
               return{
                    ...state,
                    isCreatingTodo: true,
                    hasCreatedTodo: false
               }
          case TODO_SUCCESS:
               return{
                    ...state,
                    isCreatingTodo: false,
                    hasCreatedTodo: true
               }
          case TODO_FAILURE:
               return{
                    ...state,
                    isCreatingTodo: false,
                    hasCreatedTodo: false
               }
          case FETCH_START:
               return{
                    ...state
               }
          case FETCH_SUCCESS:
               return{
                    ...state,
                    eventList: action.payload
               }
          case FETCH_FAILURE:
               return{
                    ...state
               }
          case SINGLE_EVENT_START:
               return{
                    ...state
               }
          case SINGLE_EVENT_SUCCESS:
               return{
                    ...state,
                    singleEventData:action.payload
               }
          case SINGLE_EVENT_FAILURE:
               return{
                    ...state
               }
          case EDIT_START:
               return{
                    ...state,
                    isUpdating: false
               }
          case EDIT_SUCCESS:
               return{
                    ...state,
                    isUpdating: true
               }
          case EDIT_FAILURE:
               return{
                    ...state,
                    isUpdating: false
               }
          case DELETE_START:
               return{
                    ...state,
                    isDeleted:false
               }
          case DELETE_SUCCESS:
               return{
                    ...state,
                    isDeleted:true
               }
     default:
          return state;
     }
}

