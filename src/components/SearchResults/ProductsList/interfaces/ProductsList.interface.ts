type priceType = {
  amount: number;
  currency: string;
};

export interface IProductList {
  id: string;
  picture: string;
  title: string;
  price: priceType;
  free_shipping: boolean;
  city: string;
  // handleSelectProduct: (
  //   id: string,
  //   title: string,
  //   free_shipping: boolean
  // ) => void;
}
