import { useQuery } from '@tanstack/react-query';

import { 
  getArticleBySlug 
} from '@/features/shop/article/actions/get-article-slug.action';

export const useArticleBySlug = (slug?: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: () => getArticleBySlug(slug!),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};