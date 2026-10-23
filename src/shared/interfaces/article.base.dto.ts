export type UnitsType =
  | 'units'
  | 'liter'
  | 'gram'
  | 'metro';

export interface IArticleBase {
  title: string;
  slug: string;
  detail: string | null;
  stock: number;  
  price: string;  
  units_type: UnitsType;
  image: string | null;
}