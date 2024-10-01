import Image from 'next/image';
import Price from '../../Price/Price';
import Button from '../../Button/Button';
import styles from './ProductHeader.module.css';
import { IProductHeader } from './interfaces/ProductHeader.interface';
import { getProductCondition } from '@/utils/ProductCondition/ProductCondition';

const ProductHeader = ({
  picture,
  title,
  condition,
  sold_quantity,
  price,
}: IProductHeader) => {
  return (
    <>
      <div className={styles['product-details-image-container']}>
        <Image
          src={picture}
          alt={title}
          width={680}
          height={680}
          quality={100}
          className={styles['product-details-image']}
        />
      </div>
      <div className={styles['product-details-info']}>
        <div className={styles['product-details-header']}>
          <div>
            <p style={{ fontSize: '14px' }}>{getProductCondition(condition)}</p>
            <p style={{ fontSize: '14px' }}>{sold_quantity}</p>
          </div>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{title}</p>
        </div>
        <div style={{ fontSize: '46px' }}>
          <Price amount={price?.amount} currency={price?.currency} />
        </div>
        <Button
          appearence='primary'
          size='lg'
          onClick={() => console.log('Comprar')}
        >
          Comprar
        </Button>
      </div>
    </>
  );
};

export default ProductHeader;
