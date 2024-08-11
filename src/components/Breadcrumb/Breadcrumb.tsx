import Image from 'next/image';
import styles from './Breadcrumb.module.css';
import { BreadcrumbProps } from './interfaces/BreadcrumbProps';
export const Breadcrumb = ({ path }: BreadcrumbProps) => {
  return (
    <section className={styles['ui-search-breadcrumb']}>
      <div className={styles['search-breadcrumb']}>
        <ol className={styles['breadcrumb']}>
          {path?.map((item, index) => {
            const isLastItem = index + 1 === path?.length;
            return (
              <li
                className={styles['breadcrumb-item']}
                key={`${item}-${index}`}
              >
                <a
                  href='#'
                  className={
                    isLastItem
                      ? styles['breadcrumb-link-active']
                      : styles['breadcrumb-link']
                  }
                >
                  {item}
                </a>
                {!isLastItem && (
                  <Image
                    src='/assets/chevron-right.svg'
                    alt='Chevron'
                    width={16}
                    height={16}
                    className={styles['breadcrumb-chevron']}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
