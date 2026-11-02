import type { 
  IArticleBase 
} from '@/shared/interfaces/article.base.dto';


export interface IArticlePublic extends IArticleBase {
  id: number;
  category_name?: string | null;
  brand_name?: string | null; 
}

export interface IArticlePaginationPublic {
  counter: number; 
  pages: number;
  offset: number;
  page: number;
  page_size: number;
  articles: IArticlePublic[];
}