import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  let { pokemon } = props;
  return (
    <li className="pokelists">
      <h3>{pokemon.name}</h3>
      <img className="pokethumbs" src={pokemon.image_url} />
      <Link to={`/pokemon/${pokemon.id}`}>
        <div>click here</div>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
