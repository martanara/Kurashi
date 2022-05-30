import React, { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.scss';

import clsx from 'clsx';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <NavLink to="/"><img alt="logo" src="/images/home/kurashi_logo.png" /></NavLink>
      </div>
      <div className={styles.navLinks}>
        <ul className={clsx(isNavExpanded && styles.isExpanded)}>
          <li><NavLink to="/category/NewArrivals" >New Arrivals</NavLink></li>
          <li><NavLink to="/category/Home">Home</NavLink></li>
          <li><NavLink to="/category/Kitchen">Kitchen</NavLink></li>
          <li><NavLink to="/category/Stationery">Stationery</NavLink></li>
          <li><NavLink to="category/Fashion">Fashion</NavLink></li>
        </ul>
        <Link to="/cart"><button className={styles.button}><FontAwesomeIcon icon={faCartShopping} /></button></Link>
        <button className={styles.button}><FontAwesomeIcon icon={faUser} /></button>
        <button className={clsx(styles.button, styles.hamburger)} onClick={() => setIsNavExpanded(!isNavExpanded)}><FontAwesomeIcon icon={faBars} /></button>
      </div>
    </div>
  );
};

export default Navbar;

