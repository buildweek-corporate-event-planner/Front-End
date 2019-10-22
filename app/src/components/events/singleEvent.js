import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../actions/'

const SingleEvent = (props) => {
    const [todoItem, setTodoItem] = useState({
        list_item:"",
        completed:false,
        assigned_to_todoList:1
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
    return (
        <>
            <form onSubmit={submitTodo}>
                <input
                    text="text"
                    name="list_item"
                    value={todoItem.list_item}
                    onChange={handleChanges}
                    placeholder="blah blah"
                />
                <button onClick={() => props.addTodo(todoItem)}>Add task</button>
            </form>

            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        event_name: state.event_name,
        description: state.description,
        budget: state.budget,
        event_date: state.event_date,
        event_time: state.event_time
    }
}

export default connect(mapStateToProps, {addTodo})(SingleEvent)