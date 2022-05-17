import styles from './Gallery.module.scss';
import Container from '../Container/Container';

const Gallery = () => {

  return (
    <Container>
      <div className={styles.row}>
        <div className={styles.element}>
          <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
        </div>
        <div className={styles.element}>
        <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
        </div>
        <div className={styles.element}>
        <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.element}>
        <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
        </div>
        <div className={styles.element}>
        <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
        </div>
        <div className={styles.element}>
        <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
      </div>
    </div>
    </Container>
  );
};

export default Gallery;


