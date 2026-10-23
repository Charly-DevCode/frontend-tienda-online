import type { IArticleBase, UnitsType } from '@/shared/interfaces/article.base.dto';
import type { StatusArticle } from '@/features/admin/articles/types/articles.enums';

export interface IArticleCreate extends IArticleBase {  
  cost: number;
  brand_id: number;
  category_id: number;
}

export interface IArticleUpdate {
  title?: string;
  detail?: string;
  unitsType?: UnitsType;
  image?: string;
}

export interface IUpdateArticleStock {
  stock: number; 
}

export interface IUpdateArticlePrice {
  cost?: number; 
  price: number;
}

export interface IUpdateArticleBrand {
  brand_id: number;
}

export interface IUpdateArticleCategory {
  category_id: number;
}

export interface IArticleStatus{
  status: StatusArticle; 
}

export interface IArticleResponse extends IArticleBase {
  id: number; // Campo exclusivo de la respuesta
  cost: number;
  category_name?: string | null;
  brand_name?: string | null;
  status: StatusArticle;
}

export interface IArticlePaginationResponse {
  counter: number; 
  pages: number;
  offset: number;
  page: number;
  page_size: number;
  articles: IArticleResponse[];
}