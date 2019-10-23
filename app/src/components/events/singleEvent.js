import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSingleEvent, deleteEvent } from '../../actions/'

import TodoList from './TodoList'

const SingleEvent = (props) => {
    let id = props.match.params.id
    
    useEffect(() => {
        props.fetchSingleEvent(id)
    }, [])
    
    return (
        <div>
            <h1>{props.singleEventData.event_name}</h1>
            <h3>{props.singleEventData.description}</h3>
            <p>{props.singleEventData.event_date}</p>
            <p>{props.singleEventData.event_time}</p>
            <p>{props.singleEventData.budget}</p>
            <button onClick={() => props.history.push(`/edit-event/${id}`)}>Edit</button>
            <button onClick={() => props.deleteEvent(id, props.history)}>Delete</button>
            <TodoList id={id} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        singleEventData:state.singleEventData
    }
}

export default connect(mapStateToProps, {fetchSingleEvent, deleteEvent})(withRouter(SingleEvent))