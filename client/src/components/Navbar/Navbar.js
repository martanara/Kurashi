import styles from './Navbar.module.scss';
import Container from '../Container/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className={styles.root}>
      <Container>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <img alt='logo' src='images/home/kurashi_logo.png' />
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li><NavLink to='/'>New Arrivals</NavLink></li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>Kitchen</NavLink></li>
            <li><NavLink to='/'>Craft</NavLink></li>
            <li><NavLink to='/'>Fashion</NavLink></li>
          </ul>
          <div className={styles.userButtons}>
            <button className={styles.button}><FontAwesomeIcon icon={faCartShopping} /></button>
            <button className={styles.button}><FontAwesomeIcon icon={faUser} /></button>
         </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Navbar;

