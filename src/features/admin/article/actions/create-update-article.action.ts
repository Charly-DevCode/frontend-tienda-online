import { api } from "@/shared/api/api";

import type { 
  IArticleResponse 
} from "@/features/admin/interfaces/articles.dto";

import type { 
  ArticleFormValues 
} from "@/features/admin/article/interface/ArticleFormValues";

import { getImageURL } from "@/shared/utils/getImageURL";
import { sleep } from "@/shared/utils/sleep";



export const createUpdateArticleAction = async (
  productLike: Partial<ArticleFormValues>
): Promise<IArticleResponse> => {
  await sleep(1500);

  const { id, image, ...rest } = productLike;
  const isCreated = !id || id === 0;

  const formData = new FormData();

  // Agregar campos de texto
  Object.entries(rest).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  });

  // Si 'image' es un archivo nuevo seleccionado por el usuario:
  if (image instanceof File) {
    formData.append('image', image);
  }   

   // Debug temporal
  formData.forEach((value, key) => {
    console.log(key, value);
  });

  const { data } = await api<IArticleResponse>({
    url: isCreated 
      ? '/admin/articles/insert' 
      : `/admin/articles/update/${ id }`,
    method: isCreated ? 'POST' : 'PUT',
    data: formData,
  });

  return {
    ...data,
    image: getImageURL(data.image)
  };
}