import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {addEvent} from '../../actions/'
import Navbar from './navbar'


const AddEventForm = (props) => {

    const [ makeEvent, setMakeEvent ] = useState({
         "event_name": "",
         "description": "",
         "budget": "",
         "event_date": "",
         "event_time": "",
         "assigned_to_user": ""
        })

        	
    const handleSubmit = e => {
        e.preventDefault();

    }

    const handleChanges = e => {
        setMakeEvent({
            ...makeEvent,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
        <Navbar />
        <div>
            <h4>Fill out the form below to create a new Event</h4>
            <form onSubmit={handleSubmit}> 
                <label> Name of Event:
                <input
                type="text" 
                name="event_name"
                value={makeEvent.event_name}
                placeholder="Intersection of robo-advisors and pension funds"
                onChange={handleChanges}
                />
                </label>

                <label>Event Description:
                <input
                type="text"
                name="description"
                value={makeEvent.description}
                placeholder="Fintech Summit"
                onChange={handleChanges}
                />
                </label>

                <label>Budget:
                <input
                 type="text"
                 name="budget"
                 value={makeEvent.budget}
                 placeholder="3000$"
                 onChange={handleChanges}
                />
                </label>

                <label> Event Date:
                <input
                type="text"
                name="event_date"
                value={makeEvent.event_date}
                placeholder="YYYY-MM-DD"
                onChange={handleChanges}
                />
                </label>

                <label> Time of event:
                <input
                 type="text"
                 name="event_time"
                 value={makeEvent.event_time}
                 placeholder="HH:MM"
                 onChange={handleChanges}
                />
               </label>
                {/* <input
                 type="text"
                 name="assigned_to_user"
                 value={makeEvent.assigned_to_user}
                 placeholder=""
                 onChange={handleChanges}
                /> */}
                <button type="submit" onClick={() => props.addEvent(makeEvent, props.history)}>
                    Submit
                </button>
            </form>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        event_name: state.event_name,
        description: state.description,
        budget: state.budget,
        event_date: state.event_date,
        event_time: state.event_time,
    }
}

export default connect(mapStateToProps, {addEvent})(withRouter(AddEventForm))