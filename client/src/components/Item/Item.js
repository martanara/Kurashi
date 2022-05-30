import React, { useState } from 'react';

import { useParams } from 'react-router';

import { useNavigate} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { getProductById } from '../../redux/productsRedux';
import { addToCart } from '../../redux/cartRedux';

import Button from '../Button/Button';
import Container from '../Container/Container';

import styles from './Item.module.scss';

const Item = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { name } = useParams();

  const product = useSelector(state => getProductById(state, id));

  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(product.price);
  const [error, setError] = useState(false);
  const [stock, setStock] = useState(product.sizes[0].stock);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].name);

  const handleVariantChange = (variant) => {
    navigate(`/category/${name}/item/${variant}`);
  };

  const handleAmountChange = (amount) => {
    if(amount > stock) setAmount(stock);
    else {
      setAmount(amount);
      setError(false);
      setPrice(product.price * amount);
    }
  };

  const handlSizeChange = (name) => {
    setSelectedSize(name);
    const selected = product.sizes.find(size => size.name === name);
    setStock(selected.stock);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount < 1) {
      setError(true);
    } else {
      dispatch(addToCart({...product, amount: parseInt(amount), totalPrice: price, selectedSize}));
      navigate('/cart');
    }
  };

  return (
    <Container>
      <div className={styles.root}>
        <img alt={product.name} src={product.img}/>
        <div className={styles.description}>
          <h3>{product.name}</h3>
          <p>$ {product.price} USD</p>
          <p>{stock} left in stock</p>
          <p>{product.description}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount-input">Choose amount:</label>
            <input type="number" id="amount-input" onChange={e => handleAmountChange(e.target.value)} value={amount} min="0" max={stock.toString()} className={styles.formInputSmall}/>
            <label htmlFor="size-select">Select size:</label>
            <select name="sizes" id="size-select" onChange={e => handlSizeChange(e.target.value)} className={styles.formInputSmall}>
              {product.sizes.map(size =>
                <option key={size.name} value={size.name}>{size.name}</option>
              )}
            </select>
            <label htmlFor="variant-select">Select option:</label>
            <select name="variants" id="variant-select" onChange={e => handleVariantChange(e.target.value)} className={styles.formInputSmall}>
              <option value={product.color}>{product.color}</option>
              {product.variants.map(variant =>
                <option key={variant.id} value={variant.id}>{variant.color}</option>
              )}
            </select>
            <p>Total price: $ {price} USD <span>(shipping fee will be calculated in the next step)</span></p>
            {error && (<p className={styles.errorMessage}>Please choose product amount</p>)}
            <Button type="submit" className={styles.button}>Add to cart</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Item;


