import { Metadata } from 'next';
import SearchResults from '../../components/SearchResults/SearchResults';
import { Suspense } from 'react';
import BreadcrumbSkeleton from '@/components/Breadcrumb/Skeleton/BreadcrumbSkeleton';
import SearchResultsSkeleton from '@/components/SearchResults/Skeleton/SearchResultsSkeleton';
import styles from '@/components/SearchResults/SearchResults.module.css';

type searchParamsType = {
  search: string;
};

interface metadataProps {
  searchParams: searchParamsType;
}

export async function generateMetadata({
  searchParams,
}: metadataProps): Promise<Metadata> {
  const searchQuery = searchParams?.search;

  return {
    title: `${searchQuery} | MercadoLibre`,
    description:
      'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
    icons: {
      icon: './icon.ico',
    },
  };
}

const SearchResultsPage = () => {
  return (
    <Suspense
      fallback={
        <div className={styles['results-products-container']}>
          <BreadcrumbSkeleton />
          <SearchResultsSkeleton count={4} />
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
};

export default SearchResultsPage;
