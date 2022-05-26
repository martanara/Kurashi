import styles from './Cart.module.scss';
import Container from '../Container/Container';
import { useSelector } from 'react-redux';
import { getCart, getCartTotal } from '../../redux/cartRedux';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
  const cart = useSelector(state => getCart(state));
  const total = useSelector(state => getCartTotal(state))

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.cartDetailsCol}>
          <h2>Shopping Cart</h2>
          <div>
            {cart.map(product => <CartProduct
              key={product.id}
              {...product}
            />)}
           </div>
        </div>
        <div className={styles.cartSummaryCol}>
          <p>Shipping fee</p>
          <p>Total price {total}</p>
        </div>
      </div>
    </Container>
  );
};

export default Cart;


