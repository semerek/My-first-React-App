import React from 'react';
import styles from './Card.scss';
import propTypes from 'prop-types';

class Card extends React.Component {

    static propTypes = {
      title: propTypes.node.isRequired,
    }
    render() {
      const {title} =this.props;
      return (
        <section className={styles.component}>
          <h3>{title}</h3>
        </section>
      );
    }
}

export default Card;