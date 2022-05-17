import styles from './Navbar.module.scss';
import Container from '../Container/Container';

const Navbar = () => {

  return (
    <div className={styles.root}>
      <Container>
        <p>This is the navbar</p>
      </Container>
    </div>
  );
};

export default Navbar;


