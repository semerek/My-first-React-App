import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import styles from './SearchResults.scss';

class SearchResults extends React.Component {

    static propTypes = {
      cards: propTypes.array,
    }
    render() {
      const { cards } = this.props;
      return (
        <Container>
          <section className={styles.component}>
            <h1 className={styles.title}>Search results</h1>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </section>
        </Container>
      );
    }

}
export default SearchResults;
