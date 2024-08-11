import { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '../components/Header/Header';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Mercado Libre Argentina - Envíos Gratis en el día',
  description:
    'Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.',
  icons: {
    icon: './icon.ico',
  },
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang='es-AR'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body>
        <Header searchPlaceholder='Nunca dejes de buscar' />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
