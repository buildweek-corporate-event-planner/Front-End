import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSingleEvent, deleteEvent } from '../../actions/'

import Navbar from "../dashboard/navbar"
import TodoList from './TodoList'
import ShopList from './ShopList'
import VendorList from './VendorList'
import '../../App.css'
const SingleEvent = (props) => {
    let id = props.match.params.id
    
    useEffect(() => {
        props.fetchSingleEvent(id)
    }, [])
    
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
                
                <TodoList id={id} />
                <ShopList id={id} />
                <VendorList id={id} />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        singleEventData:state.singleEventData
    }
}

export default connect(mapStateToProps, {fetchSingleEvent, deleteEvent})(withRouter(SingleEvent))