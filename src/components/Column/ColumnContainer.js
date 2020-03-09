import {connect} from 'react-redux';
import column from './column';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(
  card => card.columnId == columnId
);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(column);  