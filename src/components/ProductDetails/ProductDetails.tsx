import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import ProductDescription from './ProductDescription/ProductDescription';
import styles from './ProductDetails.module.css';
import ProductHeader from './ProductHeader/ProductHeader';
import { Product } from '@/hooks/ProductDetails/interfaces/useProductDetails.interface';

export interface ProductDetailsProps {
  product: Product;
  categories: string[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  categories,
}) => {
  return (
    <div className={styles['product-details']}>
      <Breadcrumb path={categories} />
      <div className={styles['product-details-container']}>
        <ProductHeader
          title={product.title}
          picture={product.picture}
          condition={product.condition}
          sold_quantity={product.sold_quantity}
          price={product.price}
        />
        <ProductDescription description={product.description} />
      </div>
    </div>
  );
};

export default ProductDetails;
