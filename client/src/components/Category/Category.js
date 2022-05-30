import React from 'react';

import { useParams } from 'react-router';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getProductsByCategory } from '../../redux/productsRedux';

import Container from '../Container/Container';

import styles from './Category.module.scss';

const Category = () => {
  window.scrollTo(0, 0);

  const { name } = useParams();

  const products = useSelector(state => getProductsByCategory(state, name));

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.imgContainer}>
          <img alt={name} src={`/images/categories/${name}.jpg`}/>
          {name === 'NewArrivals' ? (<p className={styles.categoryName}>New Arrivals</p> ) : (<p className={styles.categoryName}>{name}</p>)}
        </div>
        <div className={styles.productContainer}>
          {
            products.map(product =>
              <div key={product._id} className={styles.productBox}>
                <Link to={`item/${product._id}`}><img alt={product.name} src={product.img}/></Link>
                <Link to={`item/${product._id}`}>
                  <div className={styles.productCover}>
                    <p>View More</p>
                  </div>
                </Link>
                <p><Link to={`item/${product._id}`}>{product.name}</Link></p>
                <p>$ {product.price} USD</p>
              </div>
            )
          }
        </div>
      </div>
    </Container>
  );
};

export default Category;
