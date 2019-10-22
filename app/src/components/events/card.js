import React from 'react'

import Navbar from '../dashboard/navbar'


function Card(props){

     return(
          <div>
               {/* Spencer's divs */}
               < div >
                    <div>
                         <h3>{props.event_name}</h3>
                         <h4>{props.description}</h4>
                    </div>
                    <div>
                         <h5>{props.event_date}</h5>
                         <h5>{props.event_time}</h5>
                         <h5>{props.budget}</h5>
                    </div>
               </div >

               <div>
                    {/* link to single event page */}
                    {/* <NavLink> </NavLink> */}
               </div>
          </div>
     )
}

// const mapStateToProps = state => {
//      return {
//           event_name: state.event_name,
//           description: state.description,
//           budget: state.budget,
//           event_date: state.event_date,
//           event_time: state.event_time,
//      }
// }


export default Card


/*
TODO: 
1. create to-do list using redux
2. create edit + delete buttons
3. create updateCard file where we can update events 


TODO: make dummy data for cardList - map out for individual item - find that item and compare to props - render that item - 
TODO: make sure App.js is passing down all the events to UpdateEventForm so when you're looking for the ID in UpdateForms, you can find it to fill the boxes 
*/



