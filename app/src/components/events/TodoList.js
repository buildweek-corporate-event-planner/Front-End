import React, {useState, useEffect} from 'react'
import { fetchTodo, addTodo } from '../../actions/'
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
     const resetForm = () => {
          setTodoItem({
               "list_name": '',
               "assigned_to_event": `${props.id}`
          })
     }

     
     useEffect(() => {
          props.fetchTodo(props.id)
          resetForm()
     },[props.isCreatingTodo])

     if(props.isFetching){
          return <p>Loading Tasks...</p>
     }
     return(
          <div>
               <h3>Tasks to Complete</h3>
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
               {    
                    props.todoList.map(item => {
                         return(
                              <div key={item.id}>
                                   <p>{item.list_name}</p>
                              </div>
                         )
                    })
               }
          </div>
     )
}

const mapStateToProps = state => {
     return{
          todoList: state.todoList,
          isFetching: state.isFetching,
          isCreatingTodo: state.isCreatingTodo
     }
}

export default connect(mapStateToProps, { fetchTodo, addTodo })(TodoList)