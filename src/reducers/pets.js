const initialState = {
  allPets: [],
  cats: [],
  dogs: [],
  favorites: [],
};

//constants
const RECEIVE_ALL_PETS = 'RECEIVE_ALL_PETS';
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

//reducer
const petsReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_ALL_PETS:
      newState.allPets = action.allPets;
      break;
    case ADD_FAVORITE:
      newState.favorites.push(action.newFavorite);
      break;
    case REMOVE_FAVORITE:
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

export const addFavorite = (petObj) => ({
  type: ADD_FAVORITE,
  newFavorite: petObj,
});

export const removeFavorite = (index) => ({
  type: REMOVE_FAVORITE,
  removeAt: index,
});

export default petsReducer;