import { api } from '@/shared/api/api';

import type { 
  IBrandResponse 
} from '@/features/admin/brands/interfaces/brands.dto';


export const getBrandsAction = async(): Promise<IBrandResponse[]> => {
  try {
    const response = await api.get<IBrandResponse[]>('/admin/brands/all');

    const data = response.data

    return data;
    
  } catch (error) {
    return [];
    
  }
}