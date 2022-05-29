import styles from './Hero.module.scss';

const Hero = () => {

  return (
    <div className={styles.root}>
      <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
      <div className={styles.banner}>
        <p>
          <span>Kurashi.</span> celebrates Japanese design
        </p>
        <p>
          by connecting Japanese artisans and craftsmen
        </p>
        <p>
          with buyers all over the world.
        </p>
      </div>
    </div>
  );
};

export default Hero;


