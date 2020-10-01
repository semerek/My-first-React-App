import { getSearchResults } from '../../redux/cardsRedux';
import SearchResults from './SearchResults';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => ({
  cards: getSearchResults(state, props.match.params.searchId),
});

export default connect(mapStateToProps)(SearchResults);
