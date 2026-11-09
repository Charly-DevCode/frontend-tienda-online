import { api } from "@/shared/api/api";

import type { IArticleResponse } from "@/features/admin/interfaces/articles.dto";

import { getImageURL } from "@/shared/utils/getImageURL";
import { sleep } from "@/shared/utils/sleep";

export const createUpdateArticleAction = async (
  productLike: Partial<IArticleResponse>
): Promise<IArticleResponse> => {
  sleep(1500);

  const { id, ...rest } = productLike;

  // Si no hay id o es 0/undefined, es creación
  const isCreated = !id || id === 0;

  const response = await api<IArticleResponse>({
    url: isCreated
      ? '/admin/articles/insert'
      : `/admin/articles/update/${id}`,
    method: isCreated ? 'POST' : 'PUT',
    data: rest
  });

  return {
    ...response.data,
    image: getImageURL(response.data.image)
  };
}
