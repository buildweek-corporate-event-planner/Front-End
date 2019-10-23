import React from 'react'
// import { NavLink } from 'react-router-dom';


function Card(props){

     return(
          <div>
               <div>
                    <h3>{props.eventList.event_name}</h3>
                    <h4>{props.eventList.description}</h4>
                    <h5>{props.eventList.event_date}</h5>
               </div >
          </div>
     )
}
export default Card