import { api } from '@/shared/api/api';

import type { 
  IArticleQueryParams 
} from '@/shared/interfaces/article.query.params';

import type { 
  IArticlePaginationPublic 
} from '@/features/shop/articles/interfaces/articles.dto';
import { getImageURL } from '@/shared/utils/getImageURL';


export const getArticlesPaginatedAction = async (
  params: IArticleQueryParams
): Promise<IArticlePaginationPublic> => {
  try {
    const response = await api.get<IArticlePaginationPublic>(
      '/shop/articles', {
      params: {
        page_size: params.page_size,
        page: params.page,
        title: params.title,
        category: params.category,
        brands: params.brand        
      }
    });

    const data = response.data;

    const formattedArticles = data.articles.map((article) => ({
      ...article,
      image: getImageURL(article.image)
    }));

    return {
      ...data,
      articles: formattedArticles,
    };

  } catch (error) {
    return {
      counter: 0,
      pages: 0,
      offset: 0,
      page: 1,
      page_size: params.page_size || 10,
      articles: []
    };
  }
}
