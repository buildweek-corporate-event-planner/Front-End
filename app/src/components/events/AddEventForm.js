import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {addEvent} from '../../actions/'
import Navbar from '../dashboard/navbar'
import '../../App.css'

const AddEventForm = (props) => {

    let id = parseInt(localStorage.getItem('id'))
    console.log(id)
    const [ makeEvent, setMakeEvent ] = useState({
         event_name: "",
         description: "",
         budget: "",
         event_date: "",
         event_time: "",
         assigned_to_user: id
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
        <div className="landingBoxAddEvent">
               <div className="landingText">
                    <h4 id="landingText">Use the form below to create a new event!</h4>
               </div>
        <div className="oboardingFormOuter">
            <form onSubmit={handleSubmit} className="landingFormInner"> 
                <label className="onboardingLabel"> Name of Event:
                <br />
                <input
                type="text" 
                name="event_name"
                value={makeEvent.event_name}
                placeholder="Intersection of robo-advisors and pension funds"
                onChange={handleChanges}
                className="onboardingInput"
                />
                </label>
                <br />
                <label className="onboardingLabel">Event Description:
                <br />
                <input
                type="text"
                name="description"
                value={makeEvent.description}
                placeholder="Fintech Summit"
                onChange={handleChanges}
                className="onboardingInput"
                />
                </label>
                <br />
                <label className="onboardingLabel">Budget:
                <br />
                <input
                 type="text"
                 name="budget"
                 value={makeEvent.budget}
                 placeholder="3000$"
                 onChange={handleChanges}
                 className="onboardingInput"
                />
                </label>
                <br />
                <label className="onboardingLabel"> Event Date:
                <br />
                <input
                type="text"
                name="event_date"
                value={makeEvent.event_date}
                placeholder="YYYY-MM-DD"
                onChange={handleChanges}
                className="onboardingInput"
                />
                </label>
                <br />
                <label className="onboardingLabel"> Time of event:
                <br />
                <input
                 type="text"
                 name="event_time"
                 value={makeEvent.event_time}
                 placeholder="HH:MM"
                 onChange={handleChanges}
                 className="onboardingInput"
                />
               </label>
               <br />
                <button id="login-button" className="home-button" type="submit" onClick={() => props.addEvent(makeEvent, props.history)}>
                    Submit
                </button>
            </form>
        </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps, {addEvent})(withRouter(AddEventForm))