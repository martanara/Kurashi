import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getCart, getCartTotal } from '../../redux/cartRedux';

import Button from '../Button/Button';
import CartProduct from '../CartProduct/CartProduct';
import Container from '../Container/Container';

import styles from './Cart.module.scss';

const Cart = () => {
  const cart = useSelector(state => getCart(state));
  const cartTotal = useSelector(state => getCartTotal(state));

  const calculateTotal = () => cartTotal + 20;

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinue = () => {
    navigate('/category/NewArrivals');
  };

  return (
    <Container>
      <div className={styles.root}>
        <h2>Shopping Cart</h2>
        <div className={styles.cartContainer}>
          <div className={styles.cartDetailsCol}>
            <h3>Products</h3>
            {cart.map(product => <CartProduct
              key={product._id}
              {...product}
            />)}
          </div>
          <div className={styles.cartSummaryCol}>
            <div className={styles.summaryDetails}>
              <h3>Summary</h3>
              <p>Subtotal: <span>$ {cartTotal} USD </span></p>
              <p>Shipping: <span>$ 20 USD </span></p>
              <p className={styles.summaryLine}>Total with shipping: <span>$ {calculateTotal()} USD</span></p>
              <Button onClick={handleCheckout}>Proceed to checkout</Button>
              <Button onClick={handleContinue}>Continue Shopping</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
