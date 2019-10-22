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

    let id = props.match.params.id

    return (
        <>
            <div>
                <h1>{props.singleEventData.event_name}</h1>
                <h3>{props.singleEventData.description}</h3>
                <p>{props.singleEventData.event_date}</p>
                <p>{props.singleEventData.event_time}</p>
                <p>{props.singleEventData.budget}</p>
                <button onClick={() => props.history.push(`/edit-event/${id}`)}>Edit</button>
                <button>Delete</button>
            </div>






            <form onSubmit={submitTodo}>
                <input
                    text="text"
                    name="list_item"
                    value={todoItem.list_item}
                    onChange={handleChanges}
                    placeholder="Add task"
                />
                <button onClick={() => props.addTodo(todoItem)}>Add task</button>
            </form>

           
        </>
    )
}

const mapStateToProps = state => {
    return {
        singleEventData:state.singleEventData
    }
}

export default connect(mapStateToProps, {fetchSingleEvent, addTodo})(SingleEvent)