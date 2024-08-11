import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Product,
  ProductDetailResponse,
} from './interfaces/useProductDetails.interface';

const useProductDetails = (productId: string) => {
  const [product, setProduct] = useState<Product>();
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<ProductDetailResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/items/${productId}`
        );
        setProduct(response.data.item);
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        setError('Error fetching product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, categories, loading, error };
};

export default useProductDetails;
