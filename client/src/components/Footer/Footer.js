import styles from './Footer.module.scss';
import Container from '../Container/Container';

const Footer = () => {

  return (
    <Container>
      <div className={styles.root}>
        <p>© 2022 kurashi.</p>
      </div>
    </Container>
  );
};

export default Footer;


