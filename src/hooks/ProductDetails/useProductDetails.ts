// hooks/ProductDetails/getProductDetails.ts

import axios from 'axios';
import { ProductDetailResponse } from './interfaces/useProductDetails.interface';

const getProductDetails = async (
  productId: string
): Promise<ProductDetailResponse> => {
  if (!productId) {
    throw new Error('No se proporcionó un ID de producto válido.');
  }

  try {
    const response = await axios.get<ProductDetailResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/items/${productId}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw new Error('No se pudieron obtener los detalles del producto.');
  }
};

export default getProductDetails;
