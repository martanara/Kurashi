import React from 'react';

import Container from '../Container/Container';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Highlights from '../Highlights/Highlights';

import styles from './Home.module.scss';

const Home = () => {

  return (
    <div className={styles.root}>
      <Hero />
      <Container>
        <Gallery />
        <Highlights />
      </Container>
    </div>
  );
};

export default Home;


