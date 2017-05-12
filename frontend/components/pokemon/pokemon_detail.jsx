import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { HashRouter, Route, Link } from 'react-router-dom';


class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {selected_item: false};
    this.handleSelect = this.handleSelect.bind(this)
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

  handleSelect(id) {
    this.setState({selected_item: id})
  }

  render() {
    let { id, name, attack, defense, image_url, moves, poke_type, items } = this.props.pokemonDetail;
    items = items || [];
    moves = moves || [];
    let attr = [id, attack, defense, poke_type];
    let selectId = this.state.selected_item
    if (this.props.loading_state) {
      return (<div id="loading-pokeball-container">
        <div id="loading-pokeball"></div>
      </div>);
    }
    return (
      <ul className="pokemon">
        <div className="pokemonName">{name}</div>
        <img src={image_url} />
        <li>Pokemon# {id}</li>
        <li>Type: {poke_type}</li>
        <li>Attack: {attack}</li>
        <li>Defense: {defense}</li>
        <li>Moves: {moves.map(word=> word[0].toUpperCase() + word.slice(1)).join(", ")}</li>
        <div className="itemList">
          {items.map((item, index )=> {
            return (
            <Link onClick={()=>this.handleSelect(item.id)} key={"itemlink" + index} to={`/pokemon/${item.pokemon_id}/items/${item.id}`}>
              <img className={`item${selectId === item.id ? "_selected" : ""}`} src={item.image_url} />
            </Link>);
          })}
        </div>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ ItemDetailContainer } />
      </ul>
    );
  }


}

export default PokemonDetail;
