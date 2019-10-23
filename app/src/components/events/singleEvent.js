import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSingleEvent, deleteEvent, addTodo } from '../../actions/'

import Navbar from "../dashboard/navbar"
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
    let id = props.match.params.id
    useEffect(() => {
        props.fetchSingleEvent(id)
    },[])



    return (
        <>

            <Navbar />
            <div>
                <h1>{props.singleEventData.event_name}</h1>
                <h3>{props.singleEventData.description}</h3>
                <p>{props.singleEventData.event_date}</p>
                <p>{props.singleEventData.event_time}</p>
                <p>{props.singleEventData.budget}</p>
                <button onClick={() => props.history.push(`/edit-event/${id}`)}>Edit</button>
                <button onClick={() => props.deleteEvent(id, props.history)}>Delete</button>
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

export default connect(mapStateToProps, {fetchSingleEvent, deleteEvent, addTodo})(withRouter(SingleEvent))