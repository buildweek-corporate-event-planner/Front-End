import React from 'react'
import Navbar from './navbar'
import CardList from '../events/cardList'

const Dashboard = () => {

    return (
        <>
        <Navbar />
        <div>
        <CardList />
        </div>
        </>
    )
}

export default Dashboard