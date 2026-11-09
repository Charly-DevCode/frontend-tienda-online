import { useState, useRef } from 'react';
import type { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';

import '@/shared/styles/ui/image-uploader.css';

interface SingleImageUploaderProps<T extends FieldValues> {
  setValue: UseFormSetValue<T>;
  name: Path<T>;
  label?: string;
  currentImage?: string | null;
}

export const SingleImageUploader = <T extends FieldValues>({ 
  setValue, 
  name,
  label = 'Imagen',
  currentImage 
}: SingleImageUploaderProps<T>) => {

  const [imagePreview, setImagePreview] = useState<string | null>(currentImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const processFile = (file: File) => {
    setImagePreview(URL.createObjectURL(file));
    setValue(name, file as PathValue<T, Path<T>>, { shouldDirty: true });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      processFile(files[0]);
    }
  };

  // Eventos de Drag & Drop
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      processFile(files[0]);
    }
  };

  return (
    <div className='image-uploader'>
      <div className='image-uploader__field'>
        <label className='image-uploader__label'>{label}</label>
        
        <input
          ref={fileInputRef}
          type='file'
          accept='image/*'
          className='image-uploader__input-file'
          onChange={handleFileChange}
        />
        
        {/* Zona Interactiva con Drag & Drop */}
        <div 
          className={`image-uploader__dropzone ${isDragging ? 'image-uploader__dropzone--active' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {imagePreview ? (
            <div className='image-uploader__preview-container'>
              <img src={imagePreview} alt='Preview' className='image-uploader__preview' />
              <button 
                type='button' 
                className='image-uploader__change-btn'
                onClick={() => fileInputRef.current?.click()}
              >
                Cambiar imagen
              </button>
            </div>
          ) : (
            <div className='image-uploader__placeholder-content' onClick={() => fileInputRef.current?.click()}>
              <i className="fa-solid fa-cloud-arrow-up image-uploader__icon"></i>
              <p className='image-uploader__text'>Arrastra tu imagen aquí o</p>
              <button type='button' className='image-uploader__button'>
                Seleccionar archivo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};