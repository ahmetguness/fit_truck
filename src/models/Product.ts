export interface Product {
  id: number;
  categoryId: number;
  name: string;
  price: number;
  description: string;
  image: string;
  ingredients: string;
  isBestseller: boolean;
}
