import React from 'react'

const Card = () => {

    return (
        <div>
            <div>
                <div>
                <h3>{event_name}</h3>
                <h4>{description}</h4>
                </div>
                <div>
                <h5>{event_date}</h5>
                <h5>{event_time}</h5>
                <h5>{budget}</h5>
                </div>
            </div>
            <div>
                {/* link to single event page */} 
                {/* <NavLink> </NavLink> */}
            </div>
        </div>
    )
}





const mapStateToProps = state => {
    return{
        event_name: state.event_name,
        description: state.description,
        budget: state.budget,
        event_date: state.event_date,
        event_time: state.event_time,
    }
}

export default Card