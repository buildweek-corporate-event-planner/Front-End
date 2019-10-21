import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'




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
