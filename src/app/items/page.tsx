import getProductList from '@/hooks/ProductList/useProductList';
import { Metadata } from 'next';
import SearchResults from '../../components/SearchResults/SearchResults';

type SearchParamsType = {
  search?: string;
};

interface MetadataProps {
  searchParams: SearchParamsType;
}

export async function generateMetadata({
  searchParams,
}: MetadataProps): Promise<Metadata> {
  const searchQuery = searchParams?.search || 'Resultados';

  return {
    title: `${searchQuery} | MercadoLibre`,
    description:
      'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
    icons: {
      icon: './icon.ico',
    },
  };
}

interface SearchResultsPageProps {
  searchParams: SearchParamsType;
}

const SearchResultsPage = async ({ searchParams }: SearchResultsPageProps) => {
  const search = searchParams.search;
  const data = await getProductList(search);

  return <SearchResults products={data.items} categories={data.categories} />;
};

export default SearchResultsPage;
