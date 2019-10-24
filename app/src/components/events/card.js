import React from 'react'
// import { NavLink } from 'react-router-dom';


function Card(props){

     return(
          
          <div className="eventRow">
                    <div className="eventCol">
                         <h4>{props.eventList.event_name}</h4>
                    </div>
                    <div className="eventCol">
                    <h4>{props.eventList.description}</h4>
                    </div>
                    <div className="eventCol">
                    <h4>{props.eventList.budget}</h4>
                    </div>
                    <div className="eventCol">
                    <h4>{props.eventList.event_date}</h4>
                    </div>
          </div>
     )
}
export default Card