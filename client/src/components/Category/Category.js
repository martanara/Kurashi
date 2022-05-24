import styles from './Category.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getProductsByCategory } from '../../redux/productsRedux';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const Category = () => {
  const { name } = useParams();

  const products = useSelector(state => getProductsByCategory(state, name));

  return (
      <Container>
        <div className={styles.root}>
          <h2>{name}</h2>
          <div className={styles.imgContainer}>
          <img alt={name} src={`/images/categories/${name}.jpg`} className={styles.categoryCover}/>
          </div>
          <div className={styles.productContainer}>
            {
              products.map(product =>
              <div key={product.id} className={styles.productBox}>
              <Link to={`item/${product.name}`}><img alt={product.name} src={product.variants.main}/></Link>
                  <p><Link to={`item/${product.name}`}>{product.name}</Link></p>
                  <p>$ {product.price} USD</p>
                </div>
              )
            }
          </div>
        </div>
      </Container>
  );
};

export default Category;

