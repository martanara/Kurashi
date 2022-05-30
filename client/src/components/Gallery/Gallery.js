import React from 'react';

import { Link } from 'react-router-dom';

import Container from '../Container/Container';

import styles from './Gallery.module.scss';

const Gallery = () => {

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.row}>
          <div className={styles.element}>
            <Link to="/category/Home">
              <img alt="woods" src="/images/featured/karen-OeU_hJuxv0E-unsplash.jpg"/>
              <div className={styles.bannerSmall}>
                <p>New Arrivals</p>
                <p>everything for your plants</p>
              </div>
            </Link>
          </div>
          <div className={styles.element}>
            <Link to="/category/Kitchen">
              <img alt="tea ceremony" src="/images/featured/pexels-charlotte-may-5946632.jpg"/>
              <div className={styles.bannerLarge}>
                <p>Tea Ceremony</p>
              </div>
            </Link>
          </div>
          <div className={styles.element}>
            <Link to="/category/Fashion">
              <img alt="stationery" src="/images/featured/pexels-polina-kovaleva-8101480.jpg"/>
              <div className={styles.bannerSmall}>
                <p>Back in Stock</p>
                <p>elegant stationery</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.element}>
            <Link to="/category/Fashion">
              <img alt="girl with sandals" src="/images/featured/pexels-alena-darmel-8989556.jpg"/>
              <div className={styles.bannerSmall}>
                <p>Summer fashion</p>
                <p>linen, cotton and more</p>
              </div>
            </Link>
          </div>
          <div className={styles.element}>
            <Link to="/category/Home">
              <img alt="ikebana" src="/images/featured/linh-le-uP2QOCUBu7A-unsplash.jpg"/>
              <div className={styles.bannerLarge}>
                <p>Ikebana</p>
              </div>
            </Link>
          </div>
          <div className={styles.element}>
            <Link to="/category/Home">
              <img alt="clay pottery" src="/images/featured/pexels-tara-winstead-6692149.jpg"/>
              <div className={styles.bannerSmall}>
                <p>New Arrivals</p>
                <p>minimalistic clay pottery</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;


