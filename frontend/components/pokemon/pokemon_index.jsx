import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {

  componentWillMount(){
    this.props.startLoadingAllPokemon();
    this.props.requestAllPokemon();
  }

  loading_ball(){
    return (<div id="loading-pokeball-container">
      <div id="loading-pokeball"></div>
    </div>);
  }

  indexPage() {
    const { pokemon } = this.props;
    return (
      <section className="pokedex">
      <ul className="pokelist">
        {pokemon.map((poke, idx) => (
            <PokemonIndexItem key={idx + poke.name} pokemon={poke}/>
        ))}
      </ul>
        <Route exact={true} path="/" component={ PokemonFormContainer }/>
        <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer } />
      </section>
    );
  }

  render () {
    let loading_state = this.props.loading_state;
    return (
      loading_state && this.props.pokemon.length === 0 ? this.loading_ball() : this.indexPage()
    );
  }
}

export default PokemonIndex;
