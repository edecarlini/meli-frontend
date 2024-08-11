import { Metadata } from 'next';
import SearchResults from '../../components/SearchResults/SearchResults';

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
  return <SearchResults />;
};

export default SearchResultsPage;
