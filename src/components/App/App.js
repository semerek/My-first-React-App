import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React App</h1>
        <h2 className={styles.subtitle}>simple to-do app with lists, colums and cards</h2>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]} image={['https://i.ibb.co/26zXffs/cards.jpg']}>
        </List>
        </main>

    )
  }
}

export default App;
