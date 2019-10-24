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
        <h4 className="pageTitle">Welcome to the <span id="landingSpan">{props.singleEventData.event_name} </span>event page:</h4>

        <div class="singleEvent">
            
            <div className="eventCard">
                <h4><span className="spanMan">Name: </span>{props.singleEventData.event_name}</h4>
                <h4><span className="spanMan">Description: </span>{props.singleEventData.description}</h4>
                <h4><span className="spanMan">Date: </span>{props.singleEventData.event_date}</h4>
                <h4><span className="spanMan">Hour: </span>{props.singleEventData.event_time}</h4>
                <h4><span className="spanMan">Buget: </span>{props.singleEventData.budget}</h4>
                <div className="eventBtnDiv">
                    <button className="editBtn" onClick={() => props.history.push(`/edit-event/${id}`)}>Edit</button>
                    <button className="deleteBtn"onClick={() => props.deleteEvent(id, props.history)}>Delete</button>
                </div>
               
            </div>
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