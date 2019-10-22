import React from 'react'
import Navbar from '../dashboard/navbar'


function Card(props){
     return(
          <div>
               < div >
                    <div>
                         <h3>{props.eventList.event_name}</h3>
                         <h4>{props.eventList.description}</h4>
                         <h5>{props.eventList.event_date}</h5>
                         <h5>{props.eventList.event_time}</h5>
                    </div>
               </div >

               <div>
                    {/* link to single event page */}
                    {/* <NavLink> </NavLink> */}
               </div>
          </div>
     )
}
export default Card