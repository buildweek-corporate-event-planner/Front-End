import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchData} from '../../actions/'
import { NavLink } from 'react-router-dom';
import Card from './card'

import '../../App.css'

function CardList(props){
     useEffect(() => {
          props.fetchData()
     },[])

     return(
          <div className='eventDiv'> 
               <div className="eventRowFake">
                    <div className="eventCol">
                         <h4>Event Name:</h4>
                    </div>
                    <div className="eventCol">
                         <h4>Event Desription:</h4>
                    </div>
                    <div className="eventCol">
                         <h4>Event Budget:</h4>
                    </div>
                    <div className="eventCol">
                         <h4>Date of Event:</h4>
                    </div>
                </div>
               {
                    props.eventList.map(item => {
                         return(
                         <div key={item.id} className='eventA'> 
                              <NavLink to={`/events/${item.id}`} >
                                  <Card eventList={item} key={item.id}/>
                              </NavLink>
                         </div>
                         )
                    })
               }
          </div>
     )
}
const mapStateToProps = state => {
     return{
          eventList:state.eventList
     }
}
export default connect(mapStateToProps, {fetchData})(CardList)