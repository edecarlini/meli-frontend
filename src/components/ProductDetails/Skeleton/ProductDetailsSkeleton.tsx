import styles from './ProductDetailsSkeleton.module.css';

const ProductDetailsSkeleton = () => {
  return (
    <div className={styles['product-details-skeleton']}>
      <div className={styles['product-details-skeleton-image']} />
      <div className={styles['product-details-skeleton-info']}>
        <div className={styles['product-details-skeleton-info-sold']} />
        <div className={styles['product-details-skeleton-info-title']}>
          <div
            className={styles['product-details-skeleton-info-title-lines']}
          />
          <div
            className={styles['product-details-skeleton-info-title-lines']}
          />
        </div>
        <div className={styles['product-details-skeleton-interaction']}>
          <div
            className={styles['product-details-skeleton-interaction-price']}
          />
          <div
            className={styles['product-details-skeleton-interaction-button']}
          />
        </div>
      </div>
      <div className={styles['product-details-skeleton-description']}>
        <div className={styles['product-details-skeleton-description-title']} />
        <div className={styles['product-details-skeleton-description-body']}>
          <div
            className={
              styles['product-details-skeleton-description-body-lines']
            }
          />
          <div
            className={
              styles['product-details-skeleton-description-body-lines']
            }
          />
          <div
            className={
              styles['product-details-skeleton-description-body-lines']
            }
          />
          <div
            className={
              styles['product-details-skeleton-description-body-lines']
            }
          />
          <div
            className={
              styles['product-details-skeleton-description-body-lines']
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
