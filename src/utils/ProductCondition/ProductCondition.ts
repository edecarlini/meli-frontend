type ProductConditionType = {
  [key: string]: { label: string };
};

export const ProductCondition: ProductConditionType = {
  new: { label: 'Nuevo' },
  used: { label: 'Usado' },
};

export const getProductCondition = (condition: string) => {
  if (condition in ProductCondition) {
    return ProductCondition[condition as keyof typeof ProductCondition]?.label;
  }
  return 'No especificado';
};
