import styles from './Category.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getProductsByCategory } from '../../redux/productsRedux';

const Category = () => {
  const { name } = useParams();

  const products = useSelector(state => getProductsByCategory(state, name));

  return (
    <div className={styles.root}>
    </div>
  );
};

export default Category;


 // <h2>{name}</h2>
// <img alt='table' src='images/home/pexels-pavel-danilyuk-7674538.jpg' />
// <div className={styles.productsContainer}></div>

