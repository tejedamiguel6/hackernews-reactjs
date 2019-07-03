import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Posts from './components/Posts';
import Nav from './components/navigation/Nav'
import User from './components/User'
import Comments from './components/Comments'
import { ThemeProvider } from './context/theme'



class App extends Component {

  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render () {
    return (
      <ThemeProvider value={this.state}>
      <Router>
        <div className={this.state.theme}>


        
        <div className='container'>
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
          <Route exact path='/post' component={Comments} />
        </div>
      </div>
    </Router>
    </ThemeProvider>
      
    )
  }
}


export default App;
