import React from 'react';
import styles from './SearchResultsCard.scss';
import PropTypes from 'prop-types';

class SearchResultsCard extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    listTitle: PropTypes.string,
    columnTitle: PropTypes.string,
    icon: PropTypes.string,
  };
  static defaultProps = {
    title: 'Card name',
  };
  
  render() {
    const {title, listTitle, columnTitle} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title} 
        </h3>
        <p> LIST: {listTitle} COULUMN: {columnTitle} </p>
      </section>
    );
  }
}

export default SearchResultsCard;