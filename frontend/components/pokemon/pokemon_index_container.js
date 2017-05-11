import {connect} from 'react-redux';
import { requestAllPokemon, startLoadingAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';


const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state),
  loading_state: state.loading_state
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
  startLoadingAllPokemon: () => dispatch(startLoadingAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
