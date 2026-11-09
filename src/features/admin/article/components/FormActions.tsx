import { Button } from '@/shared/ui/Button';

import '@/features/admin/article/styles/form-actions.css'

interface FormActionsProps {  
  isLoading?: boolean;
  saveText?: string;
  cancelText?: string;
  onCancel: () => void;
}

export const FormActions = ({
  onCancel,
  isLoading = false,
  saveText = 'Guardar',
  cancelText = 'Cancelar'
}: FormActionsProps) => {
  return (
    <div className="form-actions">
      <Button
        type="submit"
        variant="primary"
        className="form-actions__button--save"
        disabled={isLoading}
      >
        <i className="fa-regular fa-floppy-disk"></i> 
        {isLoading ? 'Save...' : saveText}
      </Button>

      <Button
        type="button"
        variant="cancel"
        className="form-actions__button--cancel"
        onClick={onCancel}
        disabled={isLoading}
      >
        <i className="fa-solid fa-xmark"></i> {cancelText}
      </Button>
    </div>
  );
};