import { 
  ComboCategories 
} from '@/features/admin/categories/components/ComboCategories'

const handleChangeCategory = (value: string) => {
  console.log({ value })
}

const handleChangeBrand = (value: string) => {
  console.log({ value })
}

export const SortAndFilterBar = () => {
  return (
    <div className='sort-filter-bar'>
      <div className='sort-filter-bar__category'>
        <ComboCategories onChange={handleChangeCategory} />
      </div>

      <div className='sort-filter-bar__brand'>
        <ComboCategories onChange={handleChangeBrand} />
      </div>

      <div className='sort-filter-bar__field'>
        <select>
          <option value='none' defaultValue='none'>Elija un ordenamiento</option>
          <option value='title'>Title</option>
          <option value='category'>Category</option>
          <option value='brand'>Brand</option>
          <option value='status'>Status</option>
        </select>
      </div>

      <div className='sort-filter-bar__field'>
        <select defaultValue='asc'>
          <option value='asc'>
            <i className='fa-solid fa-arrow-down-a-z'></i> 
            Ascendente (A-Z / Menor a Mayor)
          </option>
          <option value='desc'>
            <i className='fa-solid fa-arrow-up-z-a'></i> 
            Descendente (Z-A / Mayor a Menor)
          </option>
        </select>
      </div>
    </div>
  )
}
