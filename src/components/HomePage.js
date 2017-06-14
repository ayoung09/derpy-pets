import React from 'react';
import { connect } from 'react-redux';
import PetList from './PetList';
import { setPetsToDisplay } from '../reducers/pets';

const mapDispatchToProps = dispatch => ({
  setPetsToDisplay: animalType => (dispatch(setPetsToDisplay(animalType))),
});

const HomePage = ({ setPetsToDisplay }) => (
  <div>
    <h1 className="title">Derpy Pets </h1>
    <button onClick={() => setPetsToDisplay('allPets')}>All pets</button>
    <button onClick={() => setPetsToDisplay('cats')}>Cats </button>
    <button onClick={() => setPetsToDisplay('dogs')}>Dogs </button>
    <PetList />
  </div>
);

export default connect(null, mapDispatchToProps)(HomePage);