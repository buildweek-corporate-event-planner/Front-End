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
     TODO_FAILURE
} from '../actions/'



const initialState = {
     isSubmitting: false,
     isFetching: false,
     isLoggedIn: false,
     isRegistering: false,
     isCreatingEvent:false, 
     hasCreatedEvent: false,
     isCreatingTodo:false,
     hasCreatedTodo:false
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
                    isSubmititing: true
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
                    hasCreatedEvent: false,
                    isCreatingEvent: true
               }
          case NEW_EVENT_SUCCESS:
               return{
                    ...state,
                    hasCreatedEvent: true,
                    isCreatingEvent: false
               }
          case NEW_EVENT_FAILURE:
               return{
                    ...state,
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
     default:
          return state;
     }
}

