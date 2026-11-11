export const Units = [
  'units',
  'liter',
  'gram',
  'metro'
] as const;

export type UnitsType = typeof Units[number];

export interface IArticleBase {
  title: string;  
  detail: string | null;
  stock: number;  
  price: string;  
  units_type: UnitsType;
  image: string | null;
}