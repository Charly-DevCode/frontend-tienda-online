export type StatusArticle =
  | 'available'
  | 'unavailable';

// 1. Convertimos los campos de ordenamiento en una constante inmutable
export const ARTICLE_SORT_FIELDS = [
  'id',
  'title',
  'brand',
  'category',
] as const;

// 2. Derivamos el tipo automáticamente del array (igual que hiciste con ROLES)
export type ArticleSortField = typeof ARTICLE_SORT_FIELDS[number];

export interface IArticleQueryParams {
  page_size?: number;
  page?: number;
  title?: string;
  category?: string;
  brand?: string;
  sort_by?: ArticleSortField;
  sort_order?: 'asc' | 'desc';
  status?: StatusArticle;
}