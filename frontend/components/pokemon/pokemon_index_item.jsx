import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  let { pokemon } = props;
  return (
    <li className="pokelistitem">
      <Link to={`/pokemon/${pokemon.id}`}>
        {pokemon.id}
        <h5>{pokemon.name}</h5>
        <img className="pokethumbs" src={pokemon.image_url} />
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
