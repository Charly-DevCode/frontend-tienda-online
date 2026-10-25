import {
  useBrandsAll
} from '@/features/admin/brands/hooks/useBrandsAll'

import '@/shared/styles/ui/combobox.css';

interface ComboBrandsProps {
  value?: string;
  placeholder?: string;
  
  onChange: (value: string) => void;
}


export const ComboBrands = ({ 
  value, 
  placeholder = '[---- Selected Brands ----]',
  onChange 
}: ComboBrandsProps) => {
  const { data, isError, isLoading } = useBrandsAll();

  if (isLoading) return <h3 className='form-combobox__loading'>Loading brands...</h3>;
  if (isError) return null;

  return (
    <select
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      className='form-combobox'
    >
      <option className='form-combobox__option' value='' disabled>
        {placeholder}
      </option>
      {data?.map((brand) => (
        <option key={brand.id} className='form-combobox__option' value={brand.id}>
          {brand.name}
        </option>
      ))}
    </select>
  );
};