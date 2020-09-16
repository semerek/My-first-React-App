import React from 'react';
import styles from './Column.scss';
import propTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import { settings, listData } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';



class Columnn extends React.Component {

    state = {
        cards: this.props.cards || [],
    }

    static propTypes = {
        title: propTypes.node.isRequired,
    }
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}> {this.props.title}
                    <span className={styles.icon}>
                        <Icon name={this.props.icon} />
                    </span>
                </h3>
                <div className={styles.card}>
                    {this.state.cards.map(({ key, ...cardProps }) => (
                        <Card key={key} {...cardProps} />
                    ))}
                    <Creator text={settings.columnCreatorText} action={title => this.addCards(title)} />
                </div>

            </section>
        )
    }

    addCards(title) {
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
                        title,
                        icon: 'list-alt',
                        cards: []
                    }
                ]
            }

        ));
    }

}

export default Columnn;