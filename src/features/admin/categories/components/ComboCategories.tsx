import {
  useCategoriesAll
} from '@/features/admin/categories/hooks/useCategoriesAll'


interface ComboCategoriesProps {
  value?: string;
  placeholder?: string;
  
  onChange: (value: string) => void;
}

export const ComboCategories = (
  { 
    value, 
    placeholder = '[---- Selected Categories ----]',
    onChange 
  }: ComboCategoriesProps
) => {
  const { data, isError, isLoading } = useCategoriesAll();

  if (isLoading) return (<h3>Loading ...</h3>);

  if (isError) return;

  return (
    <select
      value={ value ?? '' }
      onChange={(e) => onChange(e.target.value)}
      className='combobox-categories'      
    >
      <option
        className='combobox-categories__option'
        value=''
        disabled
      >
        { placeholder }
      </option>

      {
        data?.map((category) => {
          return (
            <option
              key={ category.id }
              className='combobox-categories__option'
              value={ category.id }
            >
              { category.name }
            </option>
          )
        })
      }
    </select>
  )
}