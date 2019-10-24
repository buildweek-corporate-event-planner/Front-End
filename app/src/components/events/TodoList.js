import React, {useState, useEffect} from 'react'
import { fetchTodo, addTodo, toggleTodo } from '../../actions/'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


function TodoList(props){
     const [todoItem, setTodoItem] = useState({
          "list_name": '',
          "assigned_to_event": `${props.id}`
     })

     const useStyles = makeStyles(theme => ({
          progress: {
            margin: theme.spacing(2),
          },
        }));
        const classes = useStyles();
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
          return <CircularProgress className={classes.progress} />
     }
     return(
          <div className="eventSub">
               <h3>Tasks</h3>
               <form onSubmit={submitTodo}>
                    <input
                         text="text"
                         name="list_name"
                         value={todoItem.list_name}
                         onChange={handleChanges}
                         placeholder="Add task"
                         className="eventInput"
                    />
                    <button className="addBtn" onClick={() => props.addTodo(todoItem)}>Add task</button>
               </form>
               {    
                    props.todoList.map(item => {
                         return(
                              <div key={item.id}>
                                   <p><span className="task-button" onClick={() => props.toggleTodo(item.id)}> O </span> {item.list_name}</p>
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

export default connect(mapStateToProps, { fetchTodo, addTodo, toggleTodo })(TodoList)