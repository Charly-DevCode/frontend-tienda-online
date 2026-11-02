import { useQuery } from '@tanstack/react-query';

import { 
  getArticleById
} from '@/features/admin/article/actions/get-article-by-id.action';

export const useArticleById = (id?: number) => {
  return useQuery({
    queryKey: ['articleById', id],
    queryFn: () => getArticleById(id!),
    // !!id =>> Evita que la query intente ejecutarse si el id es undefined, null o 0
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};