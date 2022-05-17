import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';
import Gallery from '../Gallery/Gallery';
import Highlights from '../Highlights/Highlights';
import Carousel from '../Carousel/Carousel';

const Home = () => {

  return (
    <div className={styles.root}>
      <Hero />
      <Container>
        <Gallery />
        <Carousel />
        <Highlights />
      </Container>
    </div>
  );
};

export default Home;


