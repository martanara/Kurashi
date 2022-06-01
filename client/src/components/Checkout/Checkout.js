import React from 'react';
import styles from './Checkout.module.scss';

import Container from '../Container/Container';

import { useSelector, useDispatch } from 'react-redux';
import { getCart, getCartTotal, clearCart } from '../../redux/cartRedux';
import { addOrderRequest } from '../../redux/ordersRedux';

import { Navigate, Link } from 'react-router-dom';

import Button from '../Button/Button';

import { useState } from 'react';

import { useForm } from 'react-hook-form';

const Checkout = () => {
  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  const cart = useSelector(state => getCart(state));
  const cartTotal = useSelector(state => getCartTotal(state));

  const cartSummary = cart.map(product => {
    return {_id: product._id, amount: product.amount, price: product.price};
  });

  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    const order = {
      products: cartSummary,
      productTotal: cartTotal,
      shippingFee: 20,
      comment,
      firstName,
      lastName,
      country,
      address,
      postalCode,
      city,
      phone,
    };
    dispatch(addOrderRequest(order));
    dispatch(clearCart());
  };

  const calculateTotal = () => cartTotal + 20;

  if(cart.length === 0) return <Navigate to='/'/>;
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.orderSummary}>
          {cart.map(product =>
            <div key={product._id} className={styles.itemContainer}>
              <div className={styles.itemImg}>
                <img alt={product.name} src={product.img[0]}/>
              </div>
              <div className={styles.itemDetails}>
                <p>{product.name}</p>
                <p>Size: {product.selectedSize} / color: {product.color}</p>
                <p>Quantity: {product.amount}</p>
                <p>Item total: $ {product.totalPrice} USD</p>
              </div>
            </div>
          )}
          <div className={styles.priceSummary}>
            <p>Subtotal: <span>$ {cartTotal} USD</span></p>
            <p>Shipping: <span>$ 20 USD</span></p>
            <p className={styles.grandTotal}>Total: <span>$ {calculateTotal()} USD </span></p>
          </div>
        </div>
        <form onSubmit={validate(handleSubmit)} className={styles.form}>
          <label htmlFor="email-input">Contact Information</label>
          <input
            {...register('email', { required: true })}
            autoComplete="off"
            type="text"
            id="email-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className={styles.error}>Email is required.</span>}
          <label htmlFor="comment-input">Shipping address</label>
          <select id="country-select" onChange={(e) => setCountry(e.target.value)}>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Poland">Poland</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
          </select>
          <div className={styles.doubleInput}>
            <input
              {...register('firstName', { required: true })}
              type="text"
              id="first-name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              {...register('lastName', { required: true })}
              type="text"
              id="last-name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {errors.firstName && <span className={styles.error}>First name is required.</span>}
          {errors.lastName && <span className={styles.error}>Last name is required.</span>}
          <input
            {...register('address', { required: true })}
            type="text"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <span className={styles.error}>Address is required.</span>}
          <div className={styles.doubleInput}>
            <input
              {...register('postalCode', { required: true})}
              type="text"
              id="postal-code"
              placeholder="Postal code: XX-XXX"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}/>
            <input
              {...register('city', { required: true })}
              type="text"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          {errors.postalCode && <span className={styles.error}>Postal code is required.</span>}
          {errors.city && <span className={styles.error}>City is required.</span>}
          <input
            {...register('phone', { required: true })}
            type="text"
            id="phone"
            placeholder="Phone: XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className={styles.error}>Phone number is required.</span>}
          <label htmlFor="comment-input">Add comments:</label>
          <textarea
            rows="5"
            cols="60"
            id="comment-input"
            value={comment}
            onChange={e => setComment(e.target.value)}
            className={styles.formInput}
            placeholder="If you wish to personalize your products please let us know the details"
          />
          <div className={styles.buttons}>
            <Button type="submit">Place order</Button>
            <Link to="/cart">Back to cart</Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Checkout;


