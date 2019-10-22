import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSingleEvent } from '../../actions/'

function UpdateEventForm(props){



     console.log(props)


     return(
          <div>

          </div>
     )
}





const mapStateToProps = state => {
     return {
          singleEventData: state.singleEventData
     }
}

export default connect(mapStateToProps, { fetchSingleEvent})(UpdateEventForm)