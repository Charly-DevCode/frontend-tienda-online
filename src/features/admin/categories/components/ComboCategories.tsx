import {
  useCategoriesAll
} from '@/features/admin/categories/hooks/useCategoriesAll'


interface ComboCategoriesProps {
  value?: string | number;
  valueKey?: 'id' | 'name';
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export const ComboCategories = ({
  value,
  valueKey = 'name',
  placeholder = '---- Selected Categories ----',
  className = '',
  disabled = false,
  onChange
}: ComboCategoriesProps) => {

  const { data, isError, isLoading } = useCategoriesAll();

  if (isLoading) return <h3>Loading categories...</h3>;
  if (isError) return null;

  return (
    <select
      value={ value || 'none' }
      onChange={(e) => onChange?.(e.target.value)}
      className={ `form-combobox ${ className }`.trim() }
      disabled={ disabled }
    >
      <option value='none'>
        {placeholder}
      </option>

      {data?.map((category) => {
        const optionValue = valueKey === 'id' 
          ? String(category.id) 
          : category.name;
        
        return (
          <option 
            key={category.id} 
            value={ optionValue }
          >
            { category.name }
          </option>
        )
      })}
    </select>
  );
};