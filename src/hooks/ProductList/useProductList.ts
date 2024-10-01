import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { ProductListResponse } from './interfaces/useProductList.interface';

const fetcher = (url: string) =>
  axios.get<ProductListResponse>(url).then((res) => res.data);

const useProductList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const { data, error, isLoading } = useSWR(
    () =>
      search ? `${process.env.NEXT_PUBLIC_API_URL}/items?q=${search}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  const handleSelectProduct = (
    productId: string,
    productTitle: string,
    productFreeShipping: boolean
  ) => {
    if (productId) {
      router.push(`/items/${productId}`);
      document.cookie = `productTitle=${encodeURIComponent(
        productTitle
      )}; path=/; max-age=3600; SameSite=Lax`;
      document.cookie = `productFreeShipping=${productFreeShipping}; path=/; max-age=3600; SameSite=Lax`;
    }
  };

  return {
    products: data?.items || [],
    categories: data?.categories || [],
    handleSelectProduct,
    loading: isLoading,
    error,
  };
};

export default useProductList;
