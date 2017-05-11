import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import pokemonDetailReducer from './pokemon_detail_reducer';
import errorReducer from './errors_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: pokemonDetailReducer,
  errors: errorReducer,
  loading_state: loadingReducer
});

export default rootReducer;
