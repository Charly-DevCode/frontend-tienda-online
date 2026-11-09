import { api } from '@/shared/api/api';

import type { 
  IArticleResponse 
} from '@/features/admin/interfaces/articles.dto';

import { getImageURL } from '@/shared/utils/getImageURL';

export const getArticleById = async (
  id: string
): Promise<IArticleResponse> => {
  if (!id) throw new Error('Id is required');

  if (id==='insert') {
    return {
      id: 0,
      title: '',
      detail: '',
      cost: '0.00',
      price: '0.00',
      units_type: 'units',
      stock: 0,
      slug: '',
      image: null,   
      status: 'available'   
    } as IArticleResponse;
  }

  const { data } = await api<IArticleResponse>(
    `/admin/articles/${ +id }` /* +id => Hace casting a number */
  );

  return {
    ...data,    
    image: getImageURL(data.image),
  };
};