import React from 'react';
import styles from './Hero.scss';
import propTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';



const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.image}></img>

  </header>
);

Hero.propTypes = {
  titleText: propTypes.node.isRequired,
  image: propTypes.node,
};

export default Hero;