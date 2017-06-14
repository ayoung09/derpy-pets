const initialState = {
  allPets: [],
  cats: [],
  dogs: [],
  petsToDisplay: 'allPets',
};

//constants
const RECEIVE_ALL_PETS = 'RECEIVE_ALL_PETS';
const RECEIVE_CATS = 'RECEIVE_CATS';
const RECEIVE_DOGS = 'RECEIVE_DOGS';
const SET_PETS_TO_DISPLAY = 'SET_PETS_TO_DISPLAY';

//reducer
const petsReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_ALL_PETS:
      newState.allPets = action.allPets;
      console.log('in pets reducer', newState);
      break;
    case RECEIVE_CATS:
      newState.cats = action.cats;
      break;
    case RECEIVE_DOGS:
      newState.dogs = action.dogs;
      break;
    case SET_PETS_TO_DISPLAY:
      newState.petsToDisplay = action.animalType;
      break;
    default:
      return prevState;
  }
  return newState;
};

//action-creators
export const receiveAllPets = (allPetsArray) => ({
  type: RECEIVE_ALL_PETS,
  allPets: allPetsArray,
});

export const receiveCats = (catsArray) => ({
  type: RECEIVE_CATS,
  cats: catsArray,
});

export const receiveDogs = (dogsArray) => ({
  type: RECEIVE_DOGS,
  dogs: dogsArray,
});

export const setPetsToDisplay = (animalType) => ({
  type: SET_PETS_TO_DISPLAY,
  animalType: animalType,
});

export default petsReducer;