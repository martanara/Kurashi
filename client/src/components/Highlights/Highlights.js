import styles from './Highlights.module.scss';

import Container from '../Container/Container';

const Highlights = () => {

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.carousel}>
          <img alt='girl in a white blouse' src='images/products/fashion/pexels-teona-swift-6850609.jpg' />
        </div>
        <div className={styles.text}>
          <h2>Lorem ipsum</h2>
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
          <p>
            Morbi commodo dolor ante, at semper velit volutpat et.
            Pellentesque laoreet id magna ut bibendum. Morbi laoreet commodo arcu sit amet vulputate.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id vehicula nisi.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Highlights;


