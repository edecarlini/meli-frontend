import BreadcrumbSkeleton from '@/components/Breadcrumb/Skeleton/BreadcrumbSkeleton';
import styles from './SearchResultsSkeleton.module.css';

type SearchResultsSkeletonProps = {
  count: number;
};

const SearchResultsSkeleton = ({ count }: SearchResultsSkeletonProps) => (
  <div className={styles['skeleton-container']}>
    <BreadcrumbSkeleton />
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className={styles['skeleton-product']}>
        <div className={styles['skeleton-image']} />
        <div className={styles['skeleton-info']}>
          <div className={styles['skeleton-price']} />
          <div>
            <div className={styles['skeleton-title']} />
            <div className={styles['skeleton-title']} />
          </div>
        </div>
        <div className={styles['skeleton-location-container']}>
          <div className={styles['skeleton-location']} />
        </div>
      </div>
    ))}
  </div>
);

export default SearchResultsSkeleton;
