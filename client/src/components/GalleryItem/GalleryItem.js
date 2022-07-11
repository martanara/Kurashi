import React from 'react';

import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

import styles from './GalleryItem.module.scss';

const GalleryItem = (props) => {
  console.log(props.alt, props.category);

  return (
    <div className={styles.element}>
      <Link to={`/category/${props.category}`}>
        <img alt={props.alt} src={props.img}/>
        <div className={clsx(props.banner === 'small' ? styles.bannerSmall : styles.bannerLarge)}>
          <p>{props.line1}</p>
          {
            props.line2 && (<p>everything for your plants</p>)
          }
        </div>
      </Link>
    </div>
  );
};

GalleryItem.propTypes = {
  category: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string,
};

export default GalleryItem;


