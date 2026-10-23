import { api } from "@/shared/api/api";

import type { 
  IAuthResponse 
} from "@/features/auth/interfaces/auth.dto";


export const checkAuthAction = async(): Promise<IAuthResponse> => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  try {
    const { data } = await api.get<IAuthResponse>('/auth/check-status')
  
    localStorage.setItem('token', data.token);

    return data;
  } catch (error) {
    console.log({ error });
    localStorage.removeItem('token');
    throw new Error('Token expired or not valid');
  }
}