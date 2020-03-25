import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import SearchResultsCard from '../SearchResultsCard/SearchResultsCard';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {Link} from 'react-router-dom';


class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    searchString: PropTypes.string,
  };
  static defaultProps = {
    title: 'Search for: ',
    icon: settings.defaultColumnIcon,
  };
  
  render() {
    const {title, cards, searchString} = this.props;
    return (
      <Container>
        <Hero titleText={title + searchString} image={settings.search.image} />
        <section className={styles.component}>
          {cards.map(cardData => (
            <Link to={`/list/${cardData.listId}`} className={styles.link} key={cardData.id}>
              <SearchResultsCard key={cardData.id} {...cardData} />
            </Link>
          ))}
        </section>
      </Container>
    );
  }
}

export default SearchResults;