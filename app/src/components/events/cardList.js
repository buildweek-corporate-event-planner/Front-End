import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchData} from '../../actions/'
import Card from './card'

function CardList(props){

     const [eventList, setEventList] = useState([])

     useEffect(() => {
          props.fetchData()
     }, [])

     console.log(props.eventList)


     return(
          <div>Hello I am Card List
               {
                    props.eventList.map(item => {
                         return(<Card eventList={item} key={item.id}/>)
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