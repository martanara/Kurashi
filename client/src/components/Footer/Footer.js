import React from 'react';

import Container from '../Container/Container';

import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <Container>
      <div className={styles.root}>
        <p>© 2022 kurashi.</p>
      </div>
    </Container>
  );
};

export default Footer;


