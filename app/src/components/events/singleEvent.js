import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSingleEvent, addTodo } from '../../actions/'

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




    // TODO: GETTING THE API data
    useEffect(() => {
        props.fetchSingleEvent(props.match.url)
    },[])

    console.log(props.match.url)



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

    }
}

export default connect(mapStateToProps, {fetchSingleEvent, addTodo})(SingleEvent)