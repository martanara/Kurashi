import styles from './Cart.module.scss';
import Container from '../Container/Container';
import { useSelector } from 'react-redux';
import { getCart, getCartTotal } from '../../redux/cartRedux';
import CartProduct from '../CartProduct/CartProduct';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => getCart(state));
  const cartTotal = useSelector(state => getCartTotal(state))

  const calculateTotal = () => cartTotal + 20;

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinue = () => {
    navigate('/category/NewArrivals');
  }

  return (
    <Container>
    <h2>Shopping Cart</h2>
      {cartTotal === 0 ? (<div className={styles.cartEmpty}><p>Your cart is empty</p></div>) :
      (<div className={styles.root}>
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
      </div>)}
    </Container>
  );
};

export default Cart;


