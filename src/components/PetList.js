import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  allPets: state.pets.allPets,
  cats: state.pets.cats,
  dogs: state.pets.dogs,
  petsToDisplay: state.pets.petsToDisplay,
});

const PetList = ({ allPets, cats, dogs, petsToDisplay }) => {
  const setPetList = () => {
    if (petsToDisplay === 'cats') return cats;
    else if (petsToDisplay === 'dogs') return dogs;
    else return allPets;
  };

  return (
    <div>
      <ul>
        {setPetList().map(petObj => {
          return <li>{petObj.name}</li>;
        })}
      </ul>
    </div>
  )
};

export default connect(mapStateToProps, null)(PetList);