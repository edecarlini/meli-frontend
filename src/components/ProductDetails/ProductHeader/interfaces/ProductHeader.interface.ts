type priceType = {
  amount: number;
  currency: string;
};

export interface IProductHeader {
  title: string;
  picture: string;
  condition: string;
  sold_quantity: number;
  price: priceType;
}
