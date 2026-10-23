import '@/shared/styles/components/custom-paginator.css';
import { Button } from '@/shared/ui/Button';


interface Props {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
}

export const CustomPaginator = ({ page, pages, onPageChange }: Props) => {
  return (
    <div className='pagination'>      
      <Button
        variant='primary' // O la variante que prefieras para la paginación
        disabled={page === 1}
        className='paginator__btn'        
        onClick={() => onPageChange(page - 1)}
      >
        Anterior
      </Button>

      <span className='pagination__info'>
        Página {page} de {pages}
      </span>

      <Button
        variant='primary'
        className='pagination__btn'
        disabled={page === pages}
        onClick={() => onPageChange((page || 1) + 1)}
      >
        Siguiente
      </Button>
    </div>
  );
};