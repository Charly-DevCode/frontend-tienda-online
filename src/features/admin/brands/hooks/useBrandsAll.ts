import { useQuery } from '@tanstack/react-query'

import { 
  getBrandsAction 
} from '@/features/admin/brands/actions/get-brands.action'


export const useBrandsAll = () => {
  return useQuery({
    queryKey: ['admin-brands'],
    queryFn: () => getBrandsAction(),
    staleTime: 1000 * 60 * 5
  })
}
