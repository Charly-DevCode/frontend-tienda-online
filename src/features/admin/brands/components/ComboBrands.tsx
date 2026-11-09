import {
  useBrandsAll
} from '@/features/admin/brands/hooks/useBrandsAll'


interface ComboBrandsProps {
  value?: string | number;
  valueKey?: 'id' | 'name';
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}


export const ComboBrands = ({
  value,
  valueKey = 'name',
  placeholder = '---- Selected Brands ----',
  className = '',
  disabled = false,
  onChange
}: ComboBrandsProps) => {

  const { data, isError, isLoading } = useBrandsAll();

  if (isLoading) return <h3>Loading brands...</h3>;
  if (isError) return null;

  return (
    <select
      value={value || 'none'}
      onChange={(e) => onChange?.(e.target.value)}      
      className={ `form-combobox ${ className }`.trim() }
      disabled={ disabled }
    >
      <option value='none'>
        {placeholder}
      </option>
      
      {data?.map((brand) => {
        const optionValue = valueKey === 'id' 
          ? String(brand.id) 
          : brand.name;

        return (
          <option 
            key={ brand.id }             
            value={ optionValue }
          >
            { brand.name }
          </option>
        )
      })}
    </select>
  );
};