import axios from 'axios';
import useSWR from 'swr';
import { ProductDetailResponse } from './interfaces/useProductDetails.interface';

const fetcher = (url: string) =>
  axios.get<ProductDetailResponse>(url).then((res) => res.data);

const useProductDetails = (productId: string) => {
  const { data, error, isLoading } = useSWR(
    productId ? `${process.env.NEXT_PUBLIC_API_URL}/items/${productId}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  return {
    product: data?.item,
    categories: data?.categories || [],
    loading: isLoading,
    error: error ? 'Error fetching product details' : undefined,
  };
};

export default useProductDetails;
