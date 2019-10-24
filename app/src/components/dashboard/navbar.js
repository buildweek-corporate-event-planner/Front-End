import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="largeNavItem">
            <h2>Ivory</h2>
            </div>
            <div className="smallNavItem">
                <div className="NavItem">
                    <Link to="/dashboard"><button className="navButton">Dashboard</button></Link>
                </div>
                <div className="NavItem">
                    <Link to='/add'><button className="navButton">New Event</button></Link>
                </div>
                <div className="NavItem">
                    <Link to='/'><button className="navButton">Logout</button></Link>
                </div>
            </div>
        </div>
    )
}


export default Navbar