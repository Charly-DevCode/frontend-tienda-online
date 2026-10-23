import { useQuery } from '@tanstack/react-query'

import { 
  getCategoriesAction 
} from '@/features/admin/categories/actions/get-categories.action'


export const useCategoriesAll = () => {
  return useQuery({
    queryKey: ['admin-categories'],
    queryFn: () => getCategoriesAction(),
    staleTime: 1000 * 60 * 5
  })
}
