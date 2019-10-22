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

     console.log(props)

     return(
          <div>
               {/* Spencer's divs */}
               < div >
                    <div>
                         <h3>{props.event_name}</h3>
                         <h4>{props.description}</h4>
                    </div>
                    <div>
                         <h5>{props.event_date}</h5>
                         <h5>{props.event_time}</h5>
                         <h5>{props.budget}</h5>
                    </div>
               </div >

               <div>
                    {/* link to single event page */}
                    {/* <NavLink> </NavLink> */}
               </div>





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
     return {
          event_name: state.event_name,
          description: state.description,
          budget: state.budget,
          event_date: state.event_date,
          event_time: state.event_time,
     }
}


export default connect(mapStateToProps,null)(Card)


/*
TODO: 
1. create to-do list using redux
2. create edit + delete buttons
3. create updateCard file where we can update events 

*/



