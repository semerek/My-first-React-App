import React from 'react';
import { pageFAQ } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';



const FAQ = () => (
  <Container>
    <section>
      <Hero titleText={pageFAQ.title} image={pageFAQ.image} />
      <p>{pageFAQ.content}</p>
    </section>
  </Container>

);

export default FAQ;