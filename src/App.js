import React from 'react';
import './App.css';
import User from './components/User'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Posts from './components/Posts';

// import Nav from './components/navigation/Nav'




function App() {
  return (

    
      <div className="App">
        <div className='container'>
          <Posts />
          


      
        </div>
      </div>
  
   
     
    
  );
}

export default App;
