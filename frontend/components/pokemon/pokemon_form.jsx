import React from 'react';
import { withRouter } from 'react-router-dom';


class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:"", poke_type:window.POKEMON_TYPES[0], attack:"", defense:"", moves: [], image_url: ""};
    this.update = this.update.bind(this);
    this.current_move = [];
    this.errors = this.errors.bind(this);
  }

  errors() {
    let errors = this.props.errors;
    return (
      <ul>{errors.length > 0 ? "Errors" : ""}
        {errors.map((error,idx) => <li key={"err"+idx}>{error}</li>)}
      </ul>
    );
  }

  update(property) {
   return e => {
     this.setState({[property]: e.target.value}, ()=> console.log(this.state, this.props));
   };
  }

 handleClick(e) {
   e.preventDefault();
   this.props.createPokemon(this.state).then((newPokemon) => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
   });
 }

 handleMove(e) {
   e.preventDefault();
   this.setState({moves: this.state.moves.concat(this.current_move)});
 }

 handleMoveInput(e) {
   e.preventDefault();
   this.current_move = e.currentTarget.value;
 }

 render() {
   return (
     <form className="pokeform">
       <label>Name:
         <input onChange={this.update("name")} />
       </label>
       <label>Type:
         <select onChange={this.update("poke_type")}>
          {window.POKEMON_TYPES.map((type,idx)=> <option key={"type"+idx} value={type}>{type}</option>)}
         </select>
       </label>
       <label>Attack:
         <input onChange={this.update("attack")} />
       </label>
       <label>Defense:
         <input onChange={this.update("defense")} />
       </label>
       <label>Pokemon Picture URL:
         <input onChange={this.update("image_url")} />
       </label>
       <ul>Moves:
         {this.state.moves.map((move, idx) => <li key={"move" + idx}>{move}</li> )}
       </ul>
       <label>Add Move:
         <input onChange={this.handleMoveInput.bind(this)} />
         <button onClick={this.handleMove.bind(this)}>Add Move</button>
       </label>
       <button onClick={this.handleClick.bind(this)}>Submit Pokemon!</button>

      {this.errors()}
     </form>
   );
 }


}

export default withRouter(PokemonForm);
