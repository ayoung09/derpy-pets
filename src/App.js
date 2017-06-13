import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import HomePage from './components/HomePage.js';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={HomePage}/>
    </div>
  </Router>
);

export default App;
