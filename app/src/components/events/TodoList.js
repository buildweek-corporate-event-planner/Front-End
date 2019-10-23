import React, {useState} from 'react'
import { addTodo } from '../../actions/'
import { connect } from 'react-redux'



function TodoList(props){
     const [todoItem, setTodoItem] = useState({
          "list_name": '',
          "assigned_to_event": `${props.id}`
     })
     const handleChanges = event => {
          setTodoItem({
               ...todoItem,
               [event.target.name]:event.target.value
          })
     }
     const submitTodo = event => {
          event.preventDefault()
     }
     console.log(props)

     return(
          <div>Hello I am TodoList

            <form onSubmit={submitTodo}>
                    <input
                         text="text"
                         name="list_name"
                         value={todoItem.list_name}
                         onChange={handleChanges}
                         placeholder="Add task"
                    />
                    <button onClick={() => props.addTodo(todoItem)}>Add task</button>
               </form>
          </div>
     )
}

const mapStateToProps = state => {
     return{
          
     }
}

export default connect(mapStateToProps, { addTodo })(TodoList)