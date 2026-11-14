import { 
  Units, 
  type UnitsType 
} from '@/shared/interfaces/article.base.dto';

import { capitalize } from '@/shared/utils/capitalize-formatter';

interface ComboboxUnitsProps {
  value: UnitsType;  
  onChange: (value: UnitsType) => void;
}

export const ComboboxUnits = ({ 
  value,   
  onChange 
}: ComboboxUnitsProps) => {
  return (
    <select 
      className='form-article__input'
      value={ value }
      onChange={ (e) => onChange(e.target.value as UnitsType) }
    >      
      {
        Units.map((unit) => (
          <option 
            key={ unit } 
            value={ unit }
          >
            { capitalize(unit) }
          </option>
        ))
      }
    </select>
  )
}