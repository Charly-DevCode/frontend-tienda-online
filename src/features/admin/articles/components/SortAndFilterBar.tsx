import { 
  ComboCategories 
} from '@/features/admin/categories/components/ComboCategories';

import { 
  ComboBrands 
} from '@/features/admin/brands/components/ComboBrands';

import { 
  ComboSortFilterByField 
} from '@/features/admin/components/ComboSortFilterByField';

import { 
  ComboSortOrderBy 
} from '@/features/admin/components/ComboSortOrderBy';

import '@/features/admin/articles/styles/sort-filter-bar.css';


interface SortAndFilterBarProps {
  categoryValue?: string;
  brandValue?: string;
  sortFieldValue?: string;
  sortOrderValue?: string;
  onCategoryChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onSortFieldChange: (value: string) => void;
  onSortOrderChange: (value: string) => void;
}

export const SortAndFilterBar = ({ 
  categoryValue,
  brandValue,
  sortFieldValue,
  sortOrderValue, 
  onCategoryChange, 
  onBrandChange,
  onSortFieldChange,
  onSortOrderChange,
}: SortAndFilterBarProps) => {
  const values: string[] = ['id', 'title', 'category', 'brand', 'status'];

  return (
    <div className='sort-filter-bar'>
      <div className='sort-filter-bar__category'>
        <ComboCategories 
          value={ categoryValue } 
          onChange={ onCategoryChange } 
        />
      </div>

      <div className='sort-filter-bar__brand'>
        <ComboBrands 
          value={ brandValue }
          onChange={ onBrandChange } 
        />
      </div>

      <div className='sort-filter-bar__field'>        
        <ComboSortFilterByField 
          values={ values } 
          value={ sortFieldValue }
          onChange={ onSortFieldChange }
        />
      </div>

      <div className='sort-filter-bar__order-by'>
        <ComboSortOrderBy 
          value={ sortOrderValue }
          onChange={ onSortOrderChange }
        />
      </div>
    </div>
  )
}