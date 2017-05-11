import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { HashRouter, Route, Link } from 'react-router-dom';


class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let id = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(id);
  }

  componentWillReceiveProps(nextProps) {
    let id = nextProps.match.params.pokemonId;
    if (this.props.pokemonDetail.id !== parseInt(id)) {
      this.props.requestSinglePokemon(id);
    }
  }



  render() {
    let { id, name, attack, defense, image_url, moves, poke_type, items } = this.props.pokemonDetail;
    items = items || [];
    moves = moves || [];
    let attr = [id, attack, defense, poke_type];
    if (this.props.loading_state) {
      return (<div id="loading-pokeball-container">
        <div id="loading-pokeball"></div>
      </div>);
    }
    return (
      <ul className="pokemon">
        <h1>{name}</h1>
        <img src={image_url} />
        <li>Pokemon#: {id}</li>
        <li>Type: {poke_type}</li>
        <li>Attack: {attack}</li>
        <li>Defense: {defense}</li>
        <li>Moves: {moves.map(word=> word[0].toUpperCase() + word.slice(1)).join(", ")}</li>
        <div className="itemList">
          {items.map((item, index )=> {
            return (
            <Link key={"itemlink" + index} to={`/pokemon/${item.pokemon_id}/items/${item.id}`}>
              <img className='item' src={item.image_url} />
            </Link>);
          })}
        </div>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ ItemDetailContainer } />
      </ul>
    );
  }


}

export default PokemonDetail;
