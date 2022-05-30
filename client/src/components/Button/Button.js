import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({type, onClick, children}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;


