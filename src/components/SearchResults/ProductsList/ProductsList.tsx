'use client';

import Image from 'next/image';
import Link from 'next/link';
import Price from '../../Price/Price';
import { IProductList } from './interfaces/ProductsList.interface';
import styles from './ProductsList.module.css';

const ProductsList = ({
  id,
  picture,
  title,
  price,
  free_shipping,
  city,
  handleSelectProduct,
}: IProductList) => {
  const onClick = () => {
    handleSelectProduct(id, title, free_shipping);
  };

  return (
    <Link
      href={`/items/${id}`}
      className={styles['result-product']}
      onClick={onClick}
    >
      <Image
        src={picture}
        alt={title}
        width={180}
        height={180}
        quality={100}
        className={styles['result-product-picture']}
      />
      <div className={styles['result-product-info']}>
        <div className={styles['result-product-header']}>
          <span className={styles['result-product-price']}>
            <Price amount={price?.amount} currency={price?.currency} />
          </span>
          {free_shipping && (
            <Image
              src='/assets/shipping-truck.svg'
              alt='Envío gratis'
              width={20}
              height={20}
              className={styles['result-product-shipping']}
            />
          )}
        </div>
        <span className={styles['result-product-title']}>{title}</span>
      </div>
      <div className={styles['result-product-location-container']}>
        <span className={styles['result-product-location']}>{city}</span>
      </div>
    </Link>
  );
};

export default ProductsList;
