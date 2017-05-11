import { START_LOADING_ALL_POKEMON, STOP_LOADING } from '../actions/pokemon_actions';

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case START_LOADING_ALL_POKEMON:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
