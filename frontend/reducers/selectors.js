export const selectAllPokemon = (state) => {
  const pokekeys = Object.keys(state.pokemon);
  return pokekeys.map(key => state.pokemon[key]);
};
