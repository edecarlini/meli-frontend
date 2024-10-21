import axios from 'axios';
import { ProductListResponse } from './interfaces/getProductList.interface';

const getProductList = async (
  search?: string
): Promise<ProductListResponse> => {
  if (!search) {
    throw new Error('No se encuentra un parámetro de búsqueda.');
  }

  try {
    const response = await axios.get<ProductListResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/items?q=${encodeURIComponent(search)}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching product list:', error);
    throw new Error('No se pudo obtener la lista de productos.');
  }
};

export default getProductList;
