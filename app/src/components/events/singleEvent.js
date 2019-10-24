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
    
    console.log(props.singleEventData[0])
    console.log(props.singleEventData)
    console.log(id)
    return (
        <>
        <Navbar />
        <div class="singleEvent">
            {
                props.singleEventData.map(item => {
                    return(
                        <>
                        <h4 key={item.id} className="pageTitle">Welcome to the <span id="landingSpan">{item.event_name} </span>event page:</h4>

                        <div className="eventCard" key={item.id}> 
                            <h4><span className="spanMan">Name: </span>{item.event_name}</h4>
                            <h4><span className="spanMan">Description: </span>{item.description}</h4>
                            <h4><span className="spanMan">Date: </span>{item.event_date}</h4>
                            <h4><span className="spanMan">Hour: </span>{item.event_time}</h4>
                            <h4><span className="spanMan">Buget: </span>{item.budget}</h4>
                            <div className="eventBtnDiv">
                                <button className="editBtn" onClick={() => props.history.push(`/edit-event/${id}`)}>Edit</button>
                                <button className="deleteBtn" onClick={() => props.deleteEvent(id, props.history)}>Delete</button>
                            </div>
                        </div>
                        </>
                    )
                })
            }

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