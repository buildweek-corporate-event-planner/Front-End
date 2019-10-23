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
     DELETE_SUCCESS, 
     TODO_LIST_START,
     TODO_LIST_SUCCESS,
     TODO_LIST_FAILURE,
     SHOP_START,
     SHOP_SUCCESS,
     SHOP_FAILURE,
     SHOP_LIST_START,
     SHOP_LIST_SUCCESS,
     SHOP_LIST_FAILURE,
     VENDOR_START,
     VENDOR_SUCCESS,
     VENDOR_FAILURE,
     VENDOR_LIST_START,
     VENDOR_LIST_SUCCESS,
     VENDOR_LIST_FAILURE,
     TOGGLE_START, 
     TOGGLE_TODO_START, 
     TOGGLE_VENDOR_START
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
     isDeleted:false,
     todoList:[],
     shopList: [],
     isCreatingShop: false,
     vendorList: [],
     isCreatingVendor: false,
     isToggling:false
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
          case TODO_LIST_START:
               return{
                    ...state,
                    isFetching:true
               }
          case TODO_LIST_SUCCESS:
               return{
                    ...state,
                    isFetching:false,
                    todoList: action.payload
               }
          case TODO_LIST_FAILURE:
               return{
                    ...state,
                    isFetching:false
               }
          case SHOP_START:
               return {
                    ...state,
                    isCreatingShop: true
               }
          case SHOP_SUCCESS:
               return {
                    ...state,
                    isCreatingShop: false
               }
          case SHOP_FAILURE:
               return {
                    ...state,
                    isCreatingShop: false
               }
          case SHOP_LIST_START:
               return {
                    ...state,
                    isFetching: true
               }
          case SHOP_LIST_SUCCESS:
               return {
                    ...state,
                    isFetching: false,
                    shopList: action.payload
               }
          case SHOP_LIST_FAILURE:
               return {
                    ...state,
                    isFetching: false
               }
          case VENDOR_START:
               return {
                    ...state,
                    isCreatingVendor: true
               }
          case VENDOR_SUCCESS:
               return {
                    ...state,
                    isCreatingVendor: false
               }
          case VENDOR_FAILURE:
               return {
                    ...state,
                    isCreatingVendor: false
               }
          case VENDOR_LIST_START:
               return {
                    ...state,
                    isFetching: true
               }
          case VENDOR_LIST_SUCCESS:
               return {
                    ...state,
                    isFetching: false,
                    vendorList: action.payload
               }
          case VENDOR_LIST_FAILURE:
               return {
                    ...state,
                    isFetching: false
               }
          case TOGGLE_START:
               return{
                    ...state,
                    shopList: state.shopList.filter(item => item.id !== action.payload) 
               }
          case TOGGLE_TODO_START:
               return{
                    ...state,
                    todoList: state.todoList.filter(item => item.id !== action.payload)
               }
          case TOGGLE_VENDOR_START:
               return{
                    ...state,
                    vendorList: state.vendorList.filter(item => item.id !== action.payload)
               }
     default:
          return state;
     }
}

