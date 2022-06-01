import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import Container from '../Container/Container';

import styles from './ThankYouPage.module.scss';

const ThankYouPage = () => {

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.thankyou}>
          <p>Thank you for your order!</p>
          <Link to="/"><Button>Back to shop!</Button></Link>
        </div>
      </div>
    </Container>
  );
};

export default ThankYouPage;


