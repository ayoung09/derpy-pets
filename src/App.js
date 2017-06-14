import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';

import store from './store';
import { receiveAllPets, receiveCats, receiveDogs } from './reducers/pets';
import petData from './data';

class App extends Component {

  componentWillMount() {
    store.dispatch(receiveAllPets(petData));
    store.dispatch(receiveCats(this.filterByAnimalType('cat', petData)));
    store.dispatch(receiveDogs(this.filterByAnimalType('dog', petData)));
  }

  filterByAnimalType(animalType, dataSet) {
    return dataSet.filter(animalObj => {
      return animalObj.type === animalType;
    });
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
