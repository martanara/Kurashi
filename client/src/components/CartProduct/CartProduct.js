import styles from './CartProduct.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartAmount } from '../../redux/cartRedux';

const CartProduct = ({id, name, img, price, totalPrice, amount, stock}) => {
  const [quantity, setQuantity] = useState(amount)
  const [itemTotalPrice, setItemTotalPrice] = useState(totalPrice);

  const dispatch = useDispatch();

  const handleAmountChange = (newAmount) => {
    setQuantity(newAmount);
    setItemTotalPrice(price * newAmount)
    dispatch(updateCartAmount({id, amount: newAmount, totalPrice: price * newAmount}))
  }

  return (
    <div className={styles.cartProduct}>
      <img alt={name} src={img}/>
      <div className={styles.productDetails}>
        <h4>{name}</h4>
        <p>Price per item: $ {price} USD</p>
        <form>
        <label htmlFor="amount-input">Quantity:</label>
        <input type='number' id="amount-input" value={quantity} min="0" max={stock} onChange={(e) => handleAmountChange(e.target.value)} className={styles.formInputSmall}/>
        <p>Item total: $ {itemTotalPrice} USD</p>
        </form>
        <p>Remove</p>
      </div>
    </div>
  );
};

export default CartProduct;


