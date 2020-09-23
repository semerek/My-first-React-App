import React from 'react';
import styles from './Home.scss';
import propTypes from 'prop-types';
import List from '../List/ListContainer.js';
import SearchContainer from '../Search/SearchContainer.js';

class Home extends React.Component {

  static propTypes = {
    title: propTypes.node,
    subtitle: propTypes.node,
    lists: propTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <SearchContainer />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>

    );
  }
}

export default Home;