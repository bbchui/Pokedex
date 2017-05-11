import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    return (
    <section className="pokedex">
      <ul>
        {pokemon.map((poke, idx) => (
          <PokemonIndexItem key={idx + poke.name} pokemon={poke}/>
        ))}
      </ul>
      <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer } />
    </section>
    );
  }
}

export default PokemonIndex;
