import styles from './Checkout.module.scss';
import Container from '../Container/Container';
import { useSelector } from 'react-redux';
import { getCart, getCartTotal } from '../../redux/cartRedux';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import Button from '../Button/Button';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useState } from 'react';

const Checkout = () => {
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);

  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    // const orderDetails = ({
    //   buyer: { email, country, firstName, lastName, address, postalCode, city, phone },
    //   order: { cart, cartTotal}
    // });
    // console.log(orderDetails);

    // We need: item, amount, item total price etc
    // dispatch - updateDataBase - product amounts
    // clear cart
  };

  const calculateTotal = () => cartTotal + 20;

  if(cart.length === 0) return <Navigate to='/'/>
  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.orderSummary}>
          {cart.map(product =>
            <div key={product._id} className={styles.itemContainer}>
              <div className={styles.itemImg}>
                <img alt={product.name} src={product.img}/>
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
        <CheckoutForm
          setEmail={setEmail}
          email={email}
          setCountry={setCountry}
          setFirstName={setFirstName}
          firstName={firstName}
          setLastName={setLastName}
          lastName={lastName}
          setAddress={setAddress}
          address={address}
          setPhone={setPhone}
          phone={phone}
          setPostalCode={setPostalCode}
          postalCode={postalCode}
          setCity={setCity}
          city={city}
        />
        <div className={styles.buttons}>
          <Button type="submit" onClick={handleSubmit}>Place order</Button>
          <Link to="/cart">Back to cart</Link>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;


