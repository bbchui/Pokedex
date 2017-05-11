export const selectAllPokemon = (state) => {
  const pokekeys = Object.keys(state.pokemon);
  return pokekeys.map(key => state.pokemon[key]);
};

export const selectPokemonItem = (state, itemId) => {
  return state.pokemonDetail.items ? state.pokemonDetail.items.filter(item => item.id === parseInt(itemId))[0] : {};
};
