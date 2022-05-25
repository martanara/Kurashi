import styles from './Item.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getProductById } from '../../redux/productsRedux';

const Item = () => {
  const { id } = useParams();

  const product = useSelector(state => getProductById(state, id));
  console.log(product)

  return (
    <div className={styles.root}>
    </div>
  );
};

export default Item;


