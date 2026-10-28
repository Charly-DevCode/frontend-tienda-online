import {
  useBrandsAll
} from '@/features/admin/brands/hooks/useBrandsAll'


interface ComboBrandsProps {
  value?: string;
  valueKey?: 'id' | 'name';
  placeholder?: string;

  onChange: (value: string) => void;
}


export const ComboBrands = ({
  value,
  valueKey = 'name',
  placeholder = '[---- Selected Brands ----]',
  onChange
}: ComboBrandsProps) => {
  const { data, isError, isLoading } = useBrandsAll();

  if (isLoading) return <h3 className='form-combobox__loading'>Loading brands...</h3>;
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
      {data?.map((brand) => {
        const optionValue = valueKey === 'id' ? String(brand.id) : brand.name;

        return (
          <option key={brand.id} className='form-combobox__option' value={optionValue}>
            {brand.name}
          </option>
        )
      })}
    </select>
  );
};