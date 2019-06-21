import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Posts from './components/Posts';
import Nav from './components/navigation/Nav'

import User from './components/User'


function App() {
  return (
    <Router>
        <div className='App container'>
          <Nav />
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Posts type='top' />}
            />
          </Switch>
          <Switch>
          <Route
              path='/new'
              render={() => <Posts type='new' />}
            />
          </Switch>
          <Route exact path='/user' component={User} />
        </div>
    </Router>

  );
}
export default App;
