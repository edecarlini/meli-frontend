import ProductDetails from '@/components/ProductDetails/ProductDetails';
import getProductDetails from '@/hooks/ProductDetails/useProductDetails';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const cookieStore = cookies();
  const title =
    cookieStore.get('productTitle')?.value || 'Mercado Libre Argentina';
  const freeShipping = cookieStore.get('productFreeShipping')?.value === 'true';

  return {
    title: `${title} | ${freeShipping ? 'Envío Gratis' : 'MercadoLibre'}`,
    description:
      'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
    icons: {
      icon: './icon.ico',
    },
  };
}

interface ProductDetailPageProps {
  params: { id: string };
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { id } = params;
  const data = await getProductDetails(id);

  return <ProductDetails product={data.item} categories={data.categories} />;
};

export default ProductDetailPage;
