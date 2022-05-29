import styles from './NotFound.module.scss';
import Container from '../Container/Container';

const NotFound = () => {

  return (
    <Container>
      <div className={styles.root}>
        <p>Page not found</p>
      </div>
    </Container>
  );
};

export default NotFound;


