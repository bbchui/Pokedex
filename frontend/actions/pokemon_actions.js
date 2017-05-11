import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receivePokemonDetail = (pokemonDetail) => ({
  type: RECEIVE_POKEMON,
  pokemonDetail
});

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = (id) => (dispatch) => {
  return APIUtil.fetchPokemon(id)
    .then(pokemonDetail => dispatch(receivePokemonDetail(pokemonDetail)));
  };
