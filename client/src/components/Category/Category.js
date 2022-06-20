import React from 'react';

import { useParams } from 'react-router';

import { useSelector } from 'react-redux';
import { getProductsByCategory } from '../../redux/productsRedux';

import Container from '../Container/Container';
import CategoryProduct from '../CategoryProduct/CategoryProduct';

import styles from './Category.module.scss';

const Category = () => {
  window.scrollTo(0, 0);

  const { name } = useParams();

  const products = useSelector(state => getProductsByCategory(state, name));

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.imgContainer}>
          <img alt={name} src={`/images/categories/${name.toLowerCase()}.jpg`}/>
          {name === 'NewArrivals' ? (<p className={styles.categoryName}>New Arrivals</p> ) : (<p className={styles.categoryName}>{name}</p>)}
        </div>
        <div className={styles.productContainer}>
          {
            products.map(product =>
              <CategoryProduct 
                key={product._id} 
                id={product._id} 
                name={product.name} 
                img={product.img} 
                price={product.price}
              />
            )
          }
        </div>
      </div>
    </Container>
  );
};

export default Category;
