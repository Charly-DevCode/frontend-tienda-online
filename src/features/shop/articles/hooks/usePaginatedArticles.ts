import { useQuery } from "@tanstack/react-query"
import type { IArticleQueryParams } from "@/shared/interfaces/article.query.params"
import { getArticlesPaginatedAction } from "@/features/shop/articles/actions/get-articles-paginated.action"

export const usePaginatedArticles = (params: IArticleQueryParams) => {
  return useQuery({
    queryKey: ['shop-articles', params],
    queryFn: () => getArticlesPaginatedAction(params),
    staleTime: 1000 * 60 * 5, // 5 Minutes
  })
}
