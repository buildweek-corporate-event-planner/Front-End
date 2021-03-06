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
          <div>
               
               <form onSubmit={submitUpdates}>
                    <input 
                         type="text"
                         name="event_name"
                         value={updateEvent.event_name}
                         onChange={handleChanges}
                         placeholder="name"
                    />
                    <input 
                         type="text"
                         name="description"
                         value={updateEvent.description || ''}
                         onChange={handleChanges}
                         placeholder="description"
                    />
                    <input 
                         type="text"
                         name="event_date"
                         value={updateEvent.event_date || ''}
                         onChange={handleChanges}
                         placeholder="date"
                    />
                    <input 
                         type="text"
                         name="event_time"
                         value={updateEvent.event_time || ''}
                         onChange={handleChanges}
                         placeholder="time"
                    />
                    <input 
                         type="text"
                         name="budget"
                         value={updateEvent.budget || ''}
                         onChange={handleChanges}
                         placeholder="budget"
                    />
                    <button onClick={() => props.editEvent(updateEvent, props.match.params.id, props.history) }>Update event</button>
               </form>
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