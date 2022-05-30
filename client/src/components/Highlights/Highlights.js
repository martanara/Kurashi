import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import Container from '../Container/Container';

import styles from './Highlights.module.scss';

const Highlights = () => {

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.carousel}>
          <Link to="/category/Fashion/item/62937aa0a1b69d98b5013275"><img alt="girl in a white blouse" src="images/products/fashion/pexels-teona-swift-6850609.jpg" /></Link>
        </div>
        <div className={styles.text}>
          <Link to="/category/Fashion/item/62937aa0a1b69d98b5013275"><h2>Cotton Summer Blouse</h2></Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui.
            Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris.
            Fusce placerat vel eros quis blandit. Donec sed volutpat augue. Suspendisse et convallis tellus, in accumsan quam.
          </p>
          <p>
            Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna.
            Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            In pharetra volutpat felis, sed sagittis sapien rutrum et.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Phasellus accumsan mi mollis massa luctus tincidunt.
            Proin ullamcorper est in enim porta, nec aliquam metus hendrerit.
          </p>
          <Link to="/category/Fashion/item/62937aa0a1b69d98b5013275"><Button>See in store</Button></Link>
        </div>
      </div>
    </Container>
  );
};

export default Highlights;


