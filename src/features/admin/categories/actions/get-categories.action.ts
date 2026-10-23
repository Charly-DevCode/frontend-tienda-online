import { api } from '@/shared/api/api';

import type { 
  ICategoryResponse 
} from '@/features/admin/categories/interfaces/categories.dto';


export const getCategoriesAction = async(): Promise<ICategoryResponse[]> => {
  try {
    const response = await api<ICategoryResponse[]>('/admin/categories/all');

    const data = response.data;

    return data;

  } catch (error) {
    return [];
    
  }
}
