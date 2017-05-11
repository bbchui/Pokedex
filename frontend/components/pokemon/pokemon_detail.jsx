import React from 'react';

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
    let attr = [id, attack, defense, moves, poke_type];
    return (
      <ul>
        HEREEEEE
        <h1>{name}</h1>
        <img src={image_url} />
        {attr.map((att,idx) => <li key={idx+"_"}>{att}</li>)}
      </ul>
    );
  }


}

export default PokemonDetail;
