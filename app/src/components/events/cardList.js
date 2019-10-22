import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchData} from '../../actions/'
import { NavLink } from 'react-router-dom';
import Card from './card'

function CardList(props){
     useEffect(() => {
          props.fetchData()
     },[])

     return(
          <div>Hello I am Card List
               {
                    props.eventList.map(item => {
                         return(
                         <div key={item.id}> 
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