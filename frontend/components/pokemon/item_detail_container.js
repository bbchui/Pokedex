import {connect} from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import ItemDetail from './item_detail';
import {selectPokemonItem} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  ItemDetail: selectPokemonItem(state, ownProps.match.params.itemId)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
