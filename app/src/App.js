import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'

import Navigation from './components/Navigation'
import Login from './components/onboarding/Login'
import Register from './components/onboarding/Register'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Navigation} />
      </Switch>
    </div>
  );
}

export default App;
