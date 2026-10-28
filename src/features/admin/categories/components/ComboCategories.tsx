import {
  useCategoriesAll
} from '@/features/admin/categories/hooks/useCategoriesAll'


interface ComboCategoriesProps {
  value?: string;
  valueKey?: 'id' | 'name';
  placeholder?: string;

  onChange: (value: string) => void;
}

export const ComboCategories = ({
  value,
  valueKey = 'name',
  placeholder = '[---- Selected Categories ----]',
  onChange
}: ComboCategoriesProps) => {
  const { data, isError, isLoading } = useCategoriesAll();

  if (isLoading) return <h3 className='form-combobox__loading'>Loading categories...</h3>;
  if (isError) return null;

  return (
    <select
      value={value || 'none'}
      onChange={(e) => onChange(e.target.value)}
      className='form-combobox'
    >
      <option className='form-combobox__option' value='none'>
        {placeholder}
      </option>
      {data?.map((category) => {
        const optionValue = valueKey === 'id' ? String(category.id) : category.name;
        return (
          <option key={category.id} className='form-combobox__option' value={optionValue}>
            {category.name}
          </option>
        )
      })}
    </select>
  );
};