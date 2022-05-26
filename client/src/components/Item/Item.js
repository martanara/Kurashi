import styles from './Item.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getProductById } from '../../redux/productsRedux';
import { addToCart } from '../../redux/cartRedux';
import Container from '../Container/Container';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Item = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { id } = useParams();
  const { name }= useParams();

  const product = useSelector(state => getProductById(state, id));

  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState('')
  const [price, setPrice] = useState(product.price)
  const [error, setError] = useState(false)

  const handleVariantChange = (variant) => {
    navigate(`/category/${name}/item/${variant}`)
  };

  const handleAmountChange = (amount) => {
    setAmount(amount);
    setError(false)
    setPrice(product.price * amount)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount < 1) {
      setError(true)
    } else {
      dispatch(addToCart({...product, amount: parseInt(amount), comment, totalPrice: price}))
      navigate('/cart')
    }
  }

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.imgContainer}>
          <img alt={product.name} src={product.img}/>
        </div>
        <div className={styles.description}>
          <h3>{product.name}</h3>
          <p>$ {product.price} USD</p>
          <p>{product.stock} left in stock</p>
          <p>{product.description}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="amount-input">Choose amount:</label>
            <input type='number' id="amount-input" onChange={e => handleAmountChange(e.target.value)} value={amount} min="0" max={product.stock} className={styles.formInputSmall}/>
            <label htmlFor="variant-select">Select option:</label>
            <select name="variants" id="variant-select" onChange={e => handleVariantChange(e.target.value)} className={styles.formInputSmall}>
              <option value={product.color}>{product.color}</option>
              {product.variants.map(variant =>
                <option key={variant.id} value={variant.id}>{variant.color}</option>
              )}
            </select>
            <p>Total price: $ {price} USD <span>(shipping fee will be calculated in the next step)</span></p>
            <label htmlFor="comment-input">Add comments:</label>
            <textarea rows="3" cols="50" id="comment-input" value={comment} onChange={e => setComment(e.target.value)} className={styles.formInput}/>
            {error && (<p className={styles.errorMessage}>Please choose product amount</p>)}
            <button type='submit'>Add to cart</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Item;


