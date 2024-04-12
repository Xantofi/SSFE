import { iSimilarProduct } from './iSimilarProduct';

export interface Producto {
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
  favourite: boolean;
  image: string;
  similarProducts: iSimilarProduct[];
  reviews?:
    | {
        image: string;
        name: string;
        rating: number;
        opinion: string;
        date: string;
      }[]
    | null;
}
