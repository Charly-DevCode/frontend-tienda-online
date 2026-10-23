import type { StatusArticle } from "@/features/admin/articles/types/articles.enums";
import type { ArticleSortField } from "@/shared/types/articles-sort.type";

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