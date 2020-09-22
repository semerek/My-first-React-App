import React from 'react';
import styles from './Column.scss';
import propTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
{/*import { settings} from '../../data/dataStore';*/ }
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';



class Columnn extends React.Component {

  static propTypes = {
    title: propTypes.node.isRequired,
    icon: propTypes.node,
    cards: propTypes.array,
    addCard: propTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
        <h3 className={styles.title}> {title}</h3>
        <div className={styles.card}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          <Creator text={settings.columnCreatorText} action={addCard} /> 
        </div>
      </section>
    );
  }

}

export default Columnn;