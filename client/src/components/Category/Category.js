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
         {name === 'NewArrivals' ? (<h2>New Arrivals</h2>) : (<h2>{name}</h2>)}
          <div className={styles.imgContainer}>
          <img alt={name} src={`/images/categories/${name}.jpg`} className={styles.categoryCover}/>
          </div>
          <div className={styles.productContainer}>
            {
              products.map(product =>
                <div key={product.id} className={styles.productBox}>
                  <Link to={`item/${product.id}`}><img alt={product.name} src={product.variants[0].img}/></Link>
                  <Link to={`item/${product.id}`}>
                    <div className={styles.productCover}>
                      <p>View More</p>
                    </div>
                  </Link>
                  <p><Link to={`item/${product.id}`}>{product.name}</Link></p>
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
