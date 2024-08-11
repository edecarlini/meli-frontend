import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import {
  Product,
  ProductListResponse,
} from './interfaces/useProductList.interface';

const useProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>();
  const [page, setPage] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get<ProductListResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/items`,
        { params: { q: search, page } }
      );
      setProducts(response.data.items);
      setCategories(response.data.categories);
      setLoading(false);
    } catch (error) {
      setError(`Error fetching products: ${error}`);
      setLoading(false);
    }
  }, [search, page]);

  const handleSelectProduct = (
    productId: string,
    productTitle: string,
    productFreeShipping: boolean
  ) => {
    if (productId) {
      router.push(`/items/${productId}`);

      document.cookie = `productTitle=${encodeURIComponent(
        productTitle
      )}; path=/; max-age=3600`;
      document.cookie = `productFreeShipping=${productFreeShipping}; path=/; max-age=3600`;
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (search) {
      fetchProducts();
    }
  }, [search, page, fetchProducts]);

  return {
    products,
    categories,
    page,
    handleSelectProduct,
    loadMore,
    loading,
    error,
  };
};

export default useProductList;
