import styles from './Cart.module.scss';
import Container from '../Container/Container';

import { useSelector } from 'react-redux';
import { getCart } from '../../redux/cartRedux';


const Cart = () => {

  const cart = useSelector(state => getCart(state));
  //console.log(cart);

  return (
    <Container>
      <div className={styles.root}>
        <h1>Your cart is empty</h1>
      </div>
    </Container>
  );
};

export default Cart;


