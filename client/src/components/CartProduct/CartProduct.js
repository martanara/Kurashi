import styles from './CartProduct.module.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartAmount, removefromCart } from '../../redux/cartRedux';
import { getProductById } from '../../redux/productsRedux';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'

const CartProduct = ({ _id, name, img, price, totalPrice, amount,  color, selectedSize, categories }) => {
  const product = useSelector(state => getProductById(state, _id));

  const checkStock = () => {
    const size = product.sizes.find(size => size.name === selectedSize)
    return size.stock;
  };

  const [quantity, setQuantity] = useState(amount)
  const [itemTotalPrice, setItemTotalPrice] = useState(totalPrice);

  const dispatch = useDispatch();

  const handleAmountChange = (newAmount) => {
    setQuantity(newAmount);
    setItemTotalPrice(price * newAmount)
    dispatch(updateCartAmount({_id, amount: newAmount, totalPrice: price * newAmount}))
  }

  const removeItem = () => {
    dispatch(removefromCart(_id))
  }

  return (
    <div className={styles.cartProduct}>
      <div className={styles.imgContainer}>
      <Link to={`/category/${categories[1]}/item/${_id}`}><img alt={name} src={img}/></Link>
      </div>
      <div className={styles.productDetails}>
        <Link to={`/category/${categories[1]}/item/${_id}`}><h4>{name}</h4></Link>
        <p className={styles.smallDetails}>Color: {color}</p>
        <p className={styles.smallDetails}>Size: {selectedSize}</p>
        <p>Price per item: <span>$ {price} USD </span></p>
        <form>
          <label htmlFor="amount-input" className={styles.label}>Quantity: </label>
          <input type='number' id="amount-input" value={quantity} min="0" max={checkStock()} onChange={(e) => handleAmountChange(e.target.value)} className={styles.formInputSmall}/>
          <p>Item total: <span>$ {itemTotalPrice} USD</span></p>
          </form>
          <Button onClick={removeItem}>Remove item</Button>
      </div>
    </div>
  );
};

export default CartProduct;


