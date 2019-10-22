import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'

// onboarding imports
import Navigation from './components/Navigation'
import Login from './components/onboarding/Login'
import Register from './components/onboarding/Register'


// dashboard imports
import Dashboard from './components/dashboard/dashboard'
import AddEventForm from './components/events/AddEventForm'

// event imports
import cardList from './components/events/cardList'
import card from './components/events/card'
import UpdateEventForm from './components/events/UpdateEventForm'

function App() {
  return (
    <div className="App">
      <Switch>
        {/* onboarding routes */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Navigation} />

        {/* Dashboarding Routes */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/add" component={AddEventForm} />
        
        {/* Event routes */}
        <PrivateRoute exact path='/events-list' component={cardList} />
        <PrivateRoute exact path='/events/:id' component={card}/>
        <PrivateRoute exact path='/edit-event/:id' component={UpdateEventForm} />
      </Switch>
    </div>
  );
}

export default App;

