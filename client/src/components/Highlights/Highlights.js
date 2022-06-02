import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getProductByName, getProductsByCategory } from '../../redux/productsRedux';

import Button from '../Button/Button';
import ImageSlider from '../ImageSlider/ImageSlider';
import Container from '../Container/Container';

import styles from './Highlights.module.scss';

const Highlights = () => {
  const highlightedProductName = 'Cotton Summer Blouse';
  const highlightedCategory = 'Fashion';
  const highlightedProduct = useSelector(state => getProductByName(state, highlightedProductName));
  const highlightedProducts = useSelector(state => getProductsByCategory(state, highlightedCategory));

  console.log(highlightedProduct);

  if (highlightedProduct) return (
    <Container>
      <div className={styles.root}>
        <div className={styles.carousel}>
          <Link to={`/category/${highlightedCategory}/item/${highlightedProduct._id}`}><img alt={highlightedProductName} src={highlightedProduct.img[0]} /></Link>
        </div>
        <div className={styles.text}>
          <Link to={`/category/${highlightedCategory}/item/${highlightedProduct._id}`}><h2>{highlightedProductName}</h2></Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui.
            Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris.
            Fusce placerat vel eros quis blandit. Donec sed volutpat augue. Suspendisse et convallis tellus, in accumsan quam.
          </p>
          <p>
            Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna.
            Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Phasellus accumsan mi mollis massa luctus tincidunt.
            Proin ullamcorper est in enim porta, nec aliquam metus hendrerit.
          </p>
          <Link to={`/category/${highlightedCategory}/item/${highlightedProduct._id}`}><Button>See in store</Button></Link>
        </div>
      </div>
      <div className={styles.gallery}>
        <h2>See more in {highlightedCategory}</h2>
        <ImageSlider images={highlightedProducts.map(product => product.img[0])} />
      </div>
    </Container>
  );
};

export default Highlights;


// <Container>
//       <div className={styles.root}>
//         <div className={styles.carousel}>
//           <Link to={highlightedProductPath}><img alt='girl' src={highlightedProduct.img[0]} /></Link>
//         </div>
//         <div className={styles.text}>
//           <Link to={highlightedProductPath}><h2>{highlightedProductName}</h2></Link>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui.
//             Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris.
//             Fusce placerat vel eros quis blandit. Donec sed volutpat augue. Suspendisse et convallis tellus, in accumsan quam.
//           </p>
//           <p>
//             Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna.
//             Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis.
//           </p>
//           <p>
//             Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
//             Phasellus accumsan mi mollis massa luctus tincidunt.
//             Proin ullamcorper est in enim porta, nec aliquam metus hendrerit.
//           </p>
//           <Link to={highlightedProductPath}><Button>See in store</Button></Link>
//         </div>
//       </div>
//       <div className={styles.gallery}>
//         <h2>See more in {highlightedCategory}</h2>
//         <ImageSlider images={highlightedProductsImages} />
//       </div>
//     </Container>

