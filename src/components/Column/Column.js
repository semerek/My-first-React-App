import React from 'react';
import styles from './Column.scss';
import propTypes from 'prop-types';
import Card from '../Card/Card.js';
{/*import Creator from '../Creator/Creator.js';*/ }
{/*import { settings} from '../../data/dataStore';*/ }
import Icon from '../Icon/Icon.js';



class Columnn extends React.Component {

  static propTypes = {
    title: propTypes.node.isRequired,
    icon: propTypes.node,
    cards: propTypes.array,
  }
  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}> {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div className={styles.card}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          {/*<Creator text={settings.columnCreatorText} action={title => this.addCards(title)} /> */}
        </div>
      </section>
    );
  }

}

export default Columnn;