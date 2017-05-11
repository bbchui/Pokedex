import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const RECEIVE_NEW_POKEMON = 'RECEIVE_NEW_POKEMON';
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';
export const START_LOADING_ALL_POKEMON = 'START_LOADING_ALL_POKEMON';
export const STOP_LOADING = 'STOP_LOADING';


export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});

export const receivePokemonDetail = (pokemonDetail) => ({
  type: RECEIVE_POKEMON,
  pokemonDetail
});

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const receiveNewPokemon = (pokemon) => ({
  type: RECEIVE_NEW_POKEMON,
  pokemon
});

export const startLoadingAllPokemon = () => ({
  type: START_LOADING_ALL_POKEMON,
  loading_state: true
});

export const stopLoading = () => ({
  type: STOP_LOADING,
  loading_state: false
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => {
      dispatch(receiveAllPokemon(pokemon));
      dispatch(stopLoading());
    });
};

export const requestSinglePokemon = (id) => (dispatch) => {
  dispatch(startLoadingAllPokemon())
  return APIUtil.fetchPokemon(id)
    .then(pokemonDetail => {
      dispatch(receivePokemonDetail(pokemonDetail));
      dispatch(stopLoading());
  });
};
  export const createPokemon = pokemon => dispatch => (
  	APIUtil.createPokemon(pokemon).then(_pokemon => {
  		dispatch(receiveNewPokemon(_pokemon));
  		return _pokemon;
  	}, response => dispatch(receivePokemonErrors(response.responseJSON.errors)))
  );
