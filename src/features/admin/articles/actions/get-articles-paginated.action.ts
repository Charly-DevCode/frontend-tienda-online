import type { 
  IArticlePaginationResponse 
} from "@/features/admin/articles/interfaces/articles.dto";

import type { 
  IArticleQueryParams 
} from "@/shared/interfaces/article.query.params";

import { api } from "@/shared/api/api";

import { getImageURL } from "@/shared/utils/getImageURL";


export const getArticlesPaginatedAction = async (
  params: IArticleQueryParams
): Promise<IArticlePaginationResponse> => {
  try {
    const response = await api.get<IArticlePaginationResponse>(
      '/admin/articles', {
      params: {
        page_size: params.page_size,
        page: params.page,
        title: params.title,
        category: params.category,
        brand: params.brand,
        sort_by: params.sort_by,
        status: params.status,
        sort_order: params.sort_order,
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
