import {
  useCategoriesAll
} from '@/features/admin/categories/hooks/useCategoriesAll'

import '@/shared/styles/ui/combobox.css';


interface ComboCategoriesProps {
  value?: string;
  placeholder?: string;
  
  onChange: (value: string) => void;
}

export const ComboCategories = ({ 
  value, 
  placeholder = '[---- Selected Categories ----]',
  onChange 
}: ComboCategoriesProps) => {
  const { data, isError, isLoading } = useCategoriesAll();

  if (isLoading) return <h3 className='form-combobox__loading'>Loading categories...</h3>;
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
      {data?.map((category) => (
        <option key={category.id} className='form-combobox__option' value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};