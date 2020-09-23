import React from 'react';
import Container from '../Container/Container';
import { pageInfo } from '../../data/dataStore';
import Hero from '../Hero/Hero.js';



const Info = () => (
  <Container>
    <section>
      <Hero titleText={pageInfo.title} image={pageInfo.image} />
      <p>{pageInfo.content}</p>
    </section>
  </Container>
);

export default Info;