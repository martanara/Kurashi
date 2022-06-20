import React from 'react';

import PropTypes from 'prop-types';

import styles from './CategoryProduct.module.scss';

import { Link } from 'react-router-dom';

const CategoryProduct = (props) => {
  return (
    <div className={styles.productBox}>
      <Link to={`item/${props.id}`}><img alt={props.name} src={props.img[0]}/></Link>
      <Link to={`item/${props.id}`}>
        <div className={styles.productCover}>
          <p>View More</p>
        </div>
      </Link>
      <p><Link to={`item/${props.id}`}>{props.name}</Link></p>
      <p>$ {props.price} USD</p>
    </div>
  );
};

CategoryProduct.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
};

export default CategoryProduct;
