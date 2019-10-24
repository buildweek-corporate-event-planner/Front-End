import React from 'react'
import Navbar from './navbar'
import CardList from '../events/cardList'

import '../../App.css'


const Dashboard = () => {

    return (
        <>
        <Navbar />
        <div>
        {/* <h4 className="pageTitle">Welcome to the Dashboard:</h4> */}
        <CardList />
        </div>
        </>
    )
}

export default Dashboard