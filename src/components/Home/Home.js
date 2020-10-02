import React from 'react';
import styles from './Home.scss';
import propTypes from 'prop-types';
import ListLink from '../ListLink/ListLink.js';
import Container from '../Container/Container';

class Home extends React.Component {

  static propTypes = {
    title: propTypes.node,
    subtitle: propTypes.node,
    lists: propTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <Container>
        <main className={styles.component}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </main>
      </Container>


    );
  }
}

export default Home;
