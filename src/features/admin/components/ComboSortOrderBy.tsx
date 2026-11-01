interface Props {  
  value?: string;                    // Valor actual (opcional)
  onChange: (value: string) => void; // Función que se ejecuta al cambiar
}

export const ComboSortOrderBy = ({ value, onChange }: Props) => {
  return (
    <select 
      value={ value || 'asc' } 
      onChange={ (e) => onChange(e.target.value) }
    >
      <option value='asc'>        
        Ascendente (A-Z / Menor a Mayor)
      </option>
      <option value='desc'>        
        Descendente (Z-A / Mayor a Menor)
      </option>
    </select>
  )
}
