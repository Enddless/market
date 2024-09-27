export type TProducts = {
  id: number;
  img: string;
  title: string;
  currentPrice: number;
  previosPrice?: number;
  rate: number;
  link: string;
};

export type TProductsBasket = TProducts & {
  count: number;
};
