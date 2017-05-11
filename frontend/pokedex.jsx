import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


// import { requestAllPokemon } from './actions/pokemon_actions';
// import { fetchAllPokemon } from './util/api_util';
// import {selectAllPokemon} from './reducers/selectors';
// window.requestAllPokemon = requestAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.selectAllPokemon = selectAllPokemon;
//
//

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  window.store = store;
   ReactDOM.render((<Root store={store}/>), document.getElementById('root'));
});
