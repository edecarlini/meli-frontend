import { useMemo } from 'react';

interface UseFormattedPriceProps {
  amount: number;
  currency: string;
}

const useFormattedPrice = ({
  amount = 0,
  currency = 'ARS',
}: UseFormattedPriceProps): string => {
  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(amount);
  }, [amount, currency]);

  return formattedPrice;
};

export default useFormattedPrice;
