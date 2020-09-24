import React from 'react';
import { pageFAQ } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import styles from './FAQ.scss';


const FAQ = () => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={pageFAQ.title} image={pageFAQ.image} />
      <p>{pageFAQ.content}</p>
    </section>
  </Container>

);

export default FAQ;