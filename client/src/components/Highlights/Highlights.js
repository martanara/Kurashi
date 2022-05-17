import styles from './Highlights.module.scss';

import Container from '../Container/Container';

const Highlights = () => {

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.carousel}>
          <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
        </div>
        <div className={styles.text}>
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui.
            Proin aliquet posuere nisl, vel vestibulum nisl interdum quis. Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris.
            Fusce placerat vel eros quis blandit. Donec sed volutpat augue. Suspendisse et convallis tellus, in accumsan quam.
            In turpis metus, mollis in magna id, bibendum luctus massa. Proin sit amet ligula mauris.
            Aenean quis enim quis odio placerat faucibus. Praesent mattis at orci a viverra.
          </p>
          <p>
            Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna.
            Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            In pharetra volutpat felis, sed sagittis sapien rutrum et.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Phasellus accumsan mi mollis massa luctus tincidunt.
            Proin ullamcorper est in enim porta, nec aliquam metus hendrerit.
            Quisque nec ligula a lectus egestas pretium a eu lectus.
            Maecenas consectetur pulvinar fermentum.
          </p>
          <p>
            Morbi commodo dolor ante, at semper velit volutpat et.
            Pellentesque laoreet id magna ut bibendum. Morbi laoreet commodo arcu sit amet vulputate.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id vehicula nisi.
            Cras id lacus vitae velit luctus ultrices a et augue. Fusce non mi in felis imperdiet volutpat.
            Pellentesque eget ex diam. Donec tincidunt ligula et nulla tristique bibendum.
            Vestibulum vitae auctor lorem, et dignissim sapien.
            Nam mi lacus, semper a neque id, varius pharetra nisl.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Highlights;


