'use client';

import { Product } from '@/hooks/ProductList/interfaces/getProductList.interface';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import ProductsList from './ProductsList/ProductsList';
import styles from './SearchResults.module.css';

export interface SearchResultsProps {
  products: Product[];
  categories: string[];
}

const SearchResults: React.FC<SearchResultsProps> = ({
  products,
  categories,
}) => {
  const handleSelectProduct = (
    productId: string,
    productTitle: string,
    productFreeShipping: boolean
  ) => {
    if (productId) {
      document.cookie = `productTitle=${encodeURIComponent(
        productTitle
      )}; path=/; max-age=3600; SameSite=Lax; Secure`;
      document.cookie = `productFreeShipping=${productFreeShipping}; path=/; max-age=3600; SameSite=Lax; Secure`;
    }
  };

  return (
    <div className={styles['results-products-container']}>
      <>
        <Breadcrumb path={categories} />
        {products?.map(
          ({ id, picture, title, price, free_shipping, location }, index) => (
            <ProductsList
              id={id}
              picture={picture}
              title={title}
              price={price}
              free_shipping={free_shipping}
              city={location?.address?.city || ''}
              handleSelectProduct={handleSelectProduct}
              key={`${id}_${index}`}
            />
          )
        )}
      </>
    </div>
  );
};

export default SearchResults;
