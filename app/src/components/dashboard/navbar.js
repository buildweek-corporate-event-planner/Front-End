import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div className="navbar">
            <div className="largeNavItem">
            <h2>Ivory</h2>
            </div>
            <div>
                <Link to="/dashboard"><button>Dashboard</button></Link>
            </div>
            <div>
                <Link to='/add'><button className="navButton">Create New Event</button></Link>
            </div>
            <div>
                <Link to='/'><button className="navButton">Logout</button></Link>
            </div>
        </div>
    )
}

export default Navbar