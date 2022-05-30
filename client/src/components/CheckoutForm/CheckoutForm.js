import React from 'react';

import PropTypes from 'prop-types';

import styles from './CheckoutForm.module.scss';

const CheckoutForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <label htmlFor="email-input">Contact Information</label>
      <input type="text" id="email-input" placeholder="Email" value={props.email} onChange={(e) => props.setEmail(e.target.value)}/>
      <label htmlFor="comment-input">Shipping address</label>
      <select id="country-select" onChange={(e) => props.setCountry(e.target.value)}>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Poland">Poland</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
      </select>
      <div className={styles.doubleInput}>
        <input type="text" id="first-name" placeholder="First Name" value={props.firstName} onChange={(e) => props.setFirstName(e.target.value)}/>
        <input type="text" id="last-name" placeholder="Last Name" value={props.lastName} onChange={(e) => props.setLastName(e.target.value)}/>
      </div>
      <input type="text" id="address" placeholder="Address" value={props.address} onChange={(e) => props.setAddress(e.target.value)}/>
      <div className={styles.doubleInput}>
        <input type="text" id="postal-code" placeholder="Postal code" value={props.postalCode} onChange={(e) => props.setPostalCode(e.target.value)}/>
        <input type="text" id="city" placeholder="City" value={props.city} onChange={(e) => props.setCity(e.target.value)}/>
      </div>
      <input type="text" id="phone" placeholder="Phone" value={props.phone} onChange={(e) => props.setPhone(e.target.value)}/>
    </form>
  );
};

CheckoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setCountry: PropTypes.func.isRequired,
  setPhone: PropTypes.func.isRequired,
  setCity: PropTypes.func.isRequired,
  setPostalCode: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  address: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
};

export default CheckoutForm;


