import { useQuery } from '@tanstack/react-query';

import { 
  getArticlesPaginatedAction 
} from '@/features/admin/articles/actions/get-articles-paginated.action'

import type { 
  IArticleQueryParams 
} from '@/shared/interfaces/article.query.params'

export const usePaginetedArticles = (params: IArticleQueryParams) => {
  return useQuery({
    queryKey: ['admin-articles', params],
    queryFn: () => getArticlesPaginatedAction(params),
    staleTime: 1000 * 60 * 5, // 5 Minutes
  });
}