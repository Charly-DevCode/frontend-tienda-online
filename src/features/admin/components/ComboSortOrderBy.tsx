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
        <i className='fa-solid fa-arrow-down-a-z'></i>
        Ascendente (A-Z / Menor a Mayor)
      </option>
      <option value='desc'>
        <i className='fa-solid fa-arrow-up-z-a'></i>
        Descendente (Z-A / Mayor a Menor)
      </option>
    </select>
  )
}
