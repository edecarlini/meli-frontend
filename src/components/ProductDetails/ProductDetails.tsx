'use client';

import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import useProductDetails from '@/hooks/ProductDetails/useProductDetails';
import { useParams } from 'next/navigation';
import ProductDescription from './ProductDescription/ProductDescription';
import styles from './ProductDetails.module.css';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductDetailsSkeleton from './Skeleton/ProductDetailsSkeleton';
import BreadcrumbSkeleton from '../Breadcrumb/Skeleton/BreadcrumbSkeleton';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { product, categories, loading, error } = useProductDetails(id);

  return (
    <div className={styles['product-details']}>
      {loading ? (
        <>
          <BreadcrumbSkeleton />
          <ProductDetailsSkeleton />
        </>
      ) : (
        <>
          <Breadcrumb path={categories} />
          {!!product && (
            <div className={styles['product-details-container']}>
              <ProductHeader
                title={product?.title}
                picture={product?.picture}
                condition={product?.condition}
                sold_quantity={product?.sold_quantity}
                price={product?.price}
              />

              <ProductDescription description={product?.description} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
