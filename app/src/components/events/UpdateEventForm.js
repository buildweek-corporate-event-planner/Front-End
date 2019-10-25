import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { editEvent } from '../../actions/'
import { withRouter } from 'react-router-dom'

import Navbar from '../dashboard/navbar'

const initialState = {
     event_name: "",
     description: "",
     budget: "",
     event_date: "",
     event_time: "",
     id: "",
     assigned_to_user: ""
}

function UpdateEventForm(props){

     console.log(props.singleEventData)
     const [updateEvent, setUpdateEvent] = useState(initialState)

     useEffect(() => {
          if (props.singleEventData.length > 0) { setUpdateEvent(...props.singleEventData) }
     },[])
    
  
     const handleChanges = event => {
          setUpdateEvent({
               ...updateEvent,
               [event.target.name]:event.target.value
          })
     }
     const submitUpdates = event => {
          event.preventDefault()
     }

     return(
          <>
           <Navbar />
           <div className="landingBox">
                    <div className="landingText">

                         <h4 id="landingText">Edit <span id="landingSpan">{item.event_name}</span></h4>
                    </div>
               <div className="oboardingFormOuter">
               <form onSubmit={submitUpdates} className="landingFormInner">
                    <label className="onboardingLabel">Event Name
                              <br />
                    <input 
                         type="text"
                         name="event_name"
                         value={updateEvent.event_name}
                         onChange={handleChanges}
                         placeholder="name"
                         className="onboardingInput"
                    />
                     </label>
                         <br />
                    <label className="onboardingLabel">Description
                              <br />
                    <input 
                         type="text"
                         name="description"
                         value={updateEvent.description || ''}
                         onChange={handleChanges}
                         placeholder="description"
                         className="onboardingInput"
                    />
                     </label>
                         <br />
                     <label className="onboardingLabel">Date
                              <br />
                    <input 
                         type="text"
                         name="event_date"
                         value={updateEvent.event_date || ''}
                         onChange={handleChanges}
                         placeholder="date"
                         className="onboardingInput"
                    />
                     </label>
                         <br />
                     <label className="onboardingLabel">Time
                              <br />
                    <input 
                         type="text"
                         name="event_time"
                         value={updateEvent.event_time || ''}
                         onChange={handleChanges}
                         placeholder="time"
                         className="onboardingInput"
                    />
                     </label>
                         <br />
                     <label className="onboardingLabel">Budget
                              <br />
                    <input 
                         type="text"
                         name="budget"
                         value={updateEvent.budget || ''}
                         onChange={handleChanges}
                         placeholder="budget"
                         className="onboardingInput"
                    />
                     </label>
                         <br />
                    <button onClick={() => props.editEvent(updateEvent, props.match.params.id, props.history) }>Update event</button>
               </form>
          </div>
          </div>
          </>
     )
}


const mapStateToProps = state => {
     return {
          singleEventData: state.singleEventData
     }
}

export default connect(mapStateToProps, {editEvent})(withRouter(UpdateEventForm))