import { useQuery } from '@tanstack/react-query';
import { getArticlesPaginatedAction } from '@/features/shop/articles/actions/get-articles-paginated.action';
import type { IArticleQueryParams } from '@/shared/interfaces/article.query.params';

export const useArticles = (params: IArticleQueryParams) => {
  return useQuery({    
    queryKey: ['articles', params],
    queryFn: () => getArticlesPaginatedAction(params),
    placeholderData: (previousData) => previousData, // Evita parpadeos molestos al cambiar de página
    staleTime: 1000 * 60 * 5, 
  });
};