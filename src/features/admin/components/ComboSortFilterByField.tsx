import { capitalize } from '@/shared/utils/capitalize-formatter';


interface Props {
  values: string[];
  value?: string;                    // Valor actual (opcional)
  onChange: (value: string) => void; // Función que se ejecuta al cambiar
}

export const ComboSortFilterByField = ({ values, value, onChange }: Props) => {
  return (
    <select 
      value={value || 'none'} // Controla el valor actual del select
      onChange={(e) => onChange(e.target.value)} // Emite el nuevo valor seleccionado
    >
      <option value='none'>Elija un ordenamiento</option>
      {
        values.map((item) => {
          return (
            <option key={item} value={item}>
              { capitalize(item) }
            </option>
          );
        })
      }
    </select>
  );
};
