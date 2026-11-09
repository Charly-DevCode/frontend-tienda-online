import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { 
  getArticleById
} from '@/features/admin/article/actions/get-article-by-id.action';

import type { 
  IArticleResponse 
} from '@/features/admin/interfaces/articles.dto';

import { 
  createUpdateArticleAction 
} from '@/features/admin/article/actions/create-update-article.action';


export const useArticleById = (id?: string) => {
  const queryClient = useQueryClient();
  
  const query = useQuery({
    queryKey: ['admin-articles', { id }],
    queryFn: () => getArticleById(id!),
    // !!id =>> Evita que la query intente ejecutarse si el id es undefined, null o 0
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  // Todo: mutación (transformacion de la data del article)
  const mutation = useMutation({
    mutationFn: createUpdateArticleAction,
    onSuccess: (article: IArticleResponse) => {
      console.log('RESPUESTA DEL BACKEND:', article);

      // invalida el cache
      queryClient.invalidateQueries({ queryKey: ['admin-articles'] });
      queryClient.invalidateQueries({ 
        queryKey: ['admin-articles', { id: article.id }] 
      });

      // Actualizar la queryData
      queryClient.setQueryData(['admin-articles', { id: article.id }], article);
    }
  });

  return {
    ...query,
    mutation
  }
};