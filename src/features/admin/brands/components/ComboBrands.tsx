import {
  useBrandsAll
} from "@/features/admin/brands/hooks/useBrandsAll"

interface ComboBrandsProps {
  value?: string;
  placeholder?: string;
  
  onChange: (value: string) => void;
}


export const ComboBrands = (
  { 
    value, 
    placeholder = '[---- Selected Brands ----]',
    onChange 
  }: ComboBrandsProps
) => {
  const { data, isError, isLoading } = useBrandsAll();

  if (isLoading) return (<h3>Loading ...</h3>);

  if (isError) return;

  return (
    <select
      value={ value ?? '' }
      onChange={(e) => onChange(e.target.value)}
      className='combobox-brands'
      defaultValue='none'
    >
      <option
        className='combobox-brands__option'
        value=''
        disabled
      >
        { placeholder }
      </option>

      {
        data?.map((brand) => {
          return (
            <option
              key={ brand.id }
              className='combobox-brands__option'
              value={ brand.id }
            >
              { brand.name }
            </option>
          )
        })
      }
    </select>
  )
}
