import Image from 'next/image';
import styles from './BreadcrumbSkeleton.module.css';

const BreadcrumbSkeleton = () => {
  return (
    <div className={styles['skeleton-breadcrumb']}>
      <div className={styles['skeleton-category-group']} />
      <Image
        src='/assets/chevron-right.svg'
        alt={'Chevron'}
        width={16}
        height={16}
      />
      <div className={styles['skeleton-category-main']} />
    </div>
  );
};

export default BreadcrumbSkeleton;
