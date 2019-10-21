import React, {useState} from 'react'
import Navbar from './navbar'
const AddEventForm = () => {

    const [ makeEvent, setMakeEvent ] = useState({
         "event_name": "",
         "description": "",
         "budget": "",
         "event_date": "",
         "event_time": "",
         "assigned_to_user": "",
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
                name="event_name"
                value=""
                placeholder="Intersection of robo-advisors and pension funds"
                onChange={handleChanges}
                />
                </label>

                <label>Event Description:
                <input
                name="description"
                value=""
                placeholder="Fintech Summit"
                onChange={handleChanges}
                />
                </label>

                <label>Budget:
                <input
                 name="budget"
                 value=""
                 placeholder="3000$"
                 onChange={handleChanges}
                />
                </label>

                <label> Event Date:
                <input
                name="event_date"
                value=""
                placeholder="YYYY-MM-DD"
                onChange={handleChanges}
                />
                </label>

                <label> Time of event:
                <input
                 name="event_time"
                 value=""
                 placeholder="HH:MM"
                 onChange={handleChanges}
                />
               </label>
                {/* <input
                 name="assigned_to_user"
                 value=""
                 placeholder=""
                 onChange={handleChanges}
                /> */}
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
        </>
    )
}

export default AddEventForm