'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import styles from '@/components/ProductDetails/ProductDetails.module.css';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  const router = useRouter();

  useEffect(() => {
    console.error('Error en la página de detalles del producto:', error);
  }, [error]);

  return (
    <div className={styles['error-container']}>
      <h1>Oops! Algo salió mal.</h1>
      <p>No pudimos cargar los detalles del producto.</p>
      <div className={styles['error-actions-container']}>
        <Button appearence='secondary' size='md' onClick={() => reset()}>
          Intentar de nuevo
        </Button>
        <Button appearence='primary' size='md' onClick={() => router.push('/')}>
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
};

export default Error;
