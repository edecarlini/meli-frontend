'use client';

import useProductList from '@/hooks/ProductList/useProductList';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import BreadcrumbSkeleton from '../Breadcrumb/Skeleton/BreadcrumbSkeleton';
import ProductsList from './ProductsList/ProductsList';
import styles from './SearchResults.module.css';
import SearchResultsSkeleton from './Skeleton/SearchResultsSkeleton';

const SearchResults = () => {
  const { products, categories, loading, error, handleSelectProduct } =
    useProductList();

  return (
    <div className={styles['results-products-container']}>
      {loading ? (
        <>
          <BreadcrumbSkeleton />
          <SearchResultsSkeleton count={4} />
        </>
      ) : (
        <>
          <Breadcrumb path={categories} />
          {products?.map((product, index) => (
            <ProductsList
              id={product?.id}
              picture={product?.picture}
              title={product?.title}
              price={product?.price}
              free_shipping={product?.free_shipping}
              city={product?.location?.address?.city || ''}
              handleSelectProduct={handleSelectProduct}
              key={`${product?.id}_${index}`}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SearchResults;
