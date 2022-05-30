import React from 'react';

import Container from '../Container/Container';

import styles from './NotFound.module.scss';

const NotFound = () => {

  return (
    <Container>
      <div className={styles.root}>
        <p>Page not found</p>
      </div>
    </Container>
  );
};

export default NotFound;


