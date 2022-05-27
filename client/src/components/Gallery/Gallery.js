import styles from './Gallery.module.scss';
import Container from '../Container/Container';

const Gallery = () => {

  return (
    <Container>
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={styles.element}>
          <img alt='wooden cup' src='images/products/kitchen/pexels-eva-elijas-6944232.jpg'/>
        </div>
        <div className={styles.element}>
          <img alt='clay vase' src='images/products/home/pexels-tara-winstead-6692129.jpg'/>
        </div>
        <div className={styles.element}>
          <img alt='linen homewear' src='images/products/fashion/pexels-thirdman-6599685.jpg'/>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.element}>
          <img alt='socks' src='images/products/fashion/pexels-mikhail-nilov-6968427.jpg'/>
        </div>
        <div className={styles.element}>
          <img alt='maneki neko' src='images/products/home/pexels-miguel-á-padriñán-932261.jpg'/>
        </div>
        <div className={styles.element}>
          <img alt='ceramic cups' src='images/products/kitchen/pexels-pavel-danilyuk-7674537.jpg'/>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Gallery;


