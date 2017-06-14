import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import HomePage from './components/HomePage.js';

import receiveAllPets from './reducers/pets';

class App extends Component {

  ComponentDidMount() {

  }

  render () {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
