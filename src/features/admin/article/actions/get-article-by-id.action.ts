import { api } from '@/shared/api/api';

import type { IArticleResponse } from '@/features/admin/interfaces/articles.dto';

import { getImageURL } from '@/shared/utils/getImageURL';


export const getArticleById = async (
  id: number
): Promise<IArticleResponse> => {
  const response = await api<IArticleResponse>(
    `/admin/articles/${ id }`
  );

  const data = response.data;

  return {
    ...data,
    image: getImageURL(data.image),
  };
};