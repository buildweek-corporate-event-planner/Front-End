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

function App() {
  return (
    <div className="App">
      <Switch>
        {/* onboarding routes */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Navigation} />

        {/* Dashboarding Routes */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add" component={AddEventForm} />
        
      </Switch>
    </div>
  );
}

export default App;
