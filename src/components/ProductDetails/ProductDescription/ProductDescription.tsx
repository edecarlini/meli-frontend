import { IProductDescription } from './interfaces/ProductDescription.interface';
import styles from './ProductDescription.module.css';

const ProductDescription = ({ description }: IProductDescription) => {
  return (
    <div className={styles['product-details-description']}>
      <p style={{ fontSize: '28px' }}>Descripción del producto</p>
      <p style={{ fontSize: '16px', color: '#999' }}>{description}</p>
    </div>
  );
};

export default ProductDescription;
