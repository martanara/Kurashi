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
          <NavLink to='/'><img alt='logo' src='/images/home/kurashi_logo.png' /></NavLink>
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li><NavLink to='/category/NewArrivals'>New Arrivals</NavLink></li>
            <li><NavLink to='/category/Home'>Home</NavLink></li>
            <li><NavLink to='/category/Kitchen'>Kitchen</NavLink></li>
            <li><NavLink to='/category/Craft'>Craft</NavLink></li>
            <li><NavLink to='category/Fashion'>Fashion</NavLink></li>
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

