import { Metadata } from 'next';
import { cookies } from 'next/headers';
import ProductDetails from '@/components/ProductDetails/ProductDetails';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const title =
    cookieStore.get('productTitle')?.value || 'Mercado Libre Argentina';
  const freeShipping = cookieStore.get('productFreeShipping')?.value === 'true';

  return {
    title: `${title} | ${freeShipping ? 'Envio gratis' : 'MercadoLibre'}`,
    description:
      'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
    icons: {
      icon: './icon.ico',
    },
  };
}

const ProductDetailPage = () => {
  return <ProductDetails />;
};

export default ProductDetailPage;
