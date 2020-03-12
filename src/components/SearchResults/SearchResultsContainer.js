import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch}  from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  return {
    searchString: props.match.params.searchString,
    cards: getCardsForSearch(state, props.match.params.searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);  





