import styles from './SubFooter.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'

const SubFooter = () => {

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.links}>
          <h4>Our store</h4>
          <ul>
            <li><NavLink to='/'>Gift Cards</NavLink></li>
            <li><NavLink to='/'>Shipping</NavLink></li>
            <li><NavLink to='/'>Returns Policy</NavLink></li>
            <li><NavLink to='/'>Terms and Conditions</NavLink></li>
            <li><NavLink to='/'>Privacy Policy</NavLink></li>
          </ul>
        </div>
        <div className={styles.links}>
          <h4>Our company</h4>
          <ul>
            <li><NavLink to='/'>About Us</NavLink></li>
            <li><NavLink to='/'>Stores</NavLink></li>
            <li><NavLink to='/'>Careers</NavLink></li>
            <li><NavLink to='/'>Press</NavLink></li>
            <li><NavLink to='/'>Contact Us</NavLink></li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h4>Follow us on social media</h4>
            <NavLink to='/'><img alt='logo' src='images/home/kurashi_logo.png' /></NavLink>
          <ul>
            <li><button className={styles.button}><FontAwesomeIcon icon={faTwitter} /></button></li>
            <li><button className={styles.button}><FontAwesomeIcon icon={faInstagram} /></button></li>
            <li><button className={styles.button}><FontAwesomeIcon icon={faFacebook} /></button></li>
            <li><button className={styles.button}><FontAwesomeIcon icon={faPinterest} /></button></li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default SubFooter;


