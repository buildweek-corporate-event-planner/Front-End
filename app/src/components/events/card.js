import React, {useState} from 'react'
import { connect } from 'react-redux'

import {addTodo} from '../../actions/'
import Navbar from '../dashboard/navbar'


function Card(props){

     const [todoItem, setTodoItem] = useState([])

     const handleChanges = event => {
          setTodoItem([
               ...todoItem, 
               event.target.value
          ])
     }

     const submitTodo = event => {
          event.preventDefault()
     }


     return(
          <div>
               <form onSubmit={submitTodo}>
                    <input
                         text="text"
                         name="todoItem"
                         value={todoItem}
                         onChange={handleChanges}
                         placeholder= "blah blah"
                    />
                    <button onClick={() => props.addTodo(todoItem)}>Add task</button>
               </form>

               <button>Edit</button>
               <button>Delete</button>
          </div>
     )
}

const mapStateToProps = state => {
     return{

     }
}


export default connect(mapStateToProps,null)(Card)


/*
TODO: 
1. create to-do list using redux
2. create edit + delete buttons
3. create updateCard file where we can update events 

*/