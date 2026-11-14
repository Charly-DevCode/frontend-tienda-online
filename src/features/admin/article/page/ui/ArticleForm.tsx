import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { 
  AdminTitle 
} from '@/features/admin/components/AdminTitle';
import { 
  ComboBrands 
} from '@/features/admin/brands/components/ComboBrands';
import {
  ComboCategories
} from '@/features/admin/categories/components/ComboCategories';
import {
  SingleImageUploader
} from '@/shared/ui/SingleImageUploader';
import {
  ComboboxUnits
} from '@/features/admin/article/components/ComboboxUnits';
import { 
  FormActions 
} from '@/features/admin/article/components/FormActions';

import type {
  IArticleResponse
} from '@/features/admin/interfaces/articles.dto';
import type { 
  ArticleFormValues 
} from '@/features/admin/article/interface/ArticleFormValues';

import '@/features/admin/article/styles/article-form.css';


interface ArticleFormProps {
  title: string;
  subtitle: string;
  article: IArticleResponse;
  onSubmit: (productLike: Partial<ArticleFormValues>) => Promise<void>;
}

export const ArticleForm = ({
  title,
  subtitle,
  article,
  onSubmit
}: ArticleFormProps) => {

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<IArticleResponse>({
    defaultValues: article
  });

  // Valida si es un insert o update
  const isInsert = Boolean(!article.title || article.title.trim() === '');

  const navigate = useNavigate();

  return (
    <div className='article-page-layout'>
      <form className='form-article' onSubmit={handleSubmit(
        onSubmit,
        (errors) => {          
          console.log("⚠️ El formulario tiene errores de validación:", errors);
        }
      )}
      >

        {/* Bloque principal con su contenedor como elemento */}
        <AdminTitle title={title} subtitle={subtitle} />

        <div className='form-article__container'>

          {/* Sección de información como elemento */}
          <div className='form-article__info'>
            <h2 className='form-article__info-title'>
              Información del artículo
            </h2>
          </div>

          {/* Contenido principal como elemento */}
          <div className='form-article__content'>
            <div className='form-article__field'>
              <label className='form-article__label'>Title</label>
              <input
                type='text'
                className='form-article__input'
                {...register('title', {
                  required: isInsert
                })}
              />
              {errors.title && (
                <p className='form-article__error'>
                  Title is required
                </p>
              )}
            </div>

            <div className='form-article__field'>
              <label className='form-article__label'>Units</label>
              <Controller
                name='units_type'
                control={control}
                rules={{ required: 'Units is required' }}
                render={({ field }) => (
                  <ComboboxUnits
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.units_type && (
                <p className='form-article__error'>
                  {String(errors.units_type.message)}
                </p>
              )}
            </div>

            <div className='form-article__field'>
              <label className='form-article__label'>Price</label>
              <input
                type='number'
                className='form-article__input'
                {...register('price', {
                  required: isInsert,
                  min: isInsert ? {
                    value: 1,
                    message: 'The price must be at least 1'
                  } : undefined,
                })}
              />
              {errors.price && (
                <p className='form-article__error'>
                  {String(errors.price.message)}
                </p>
              )}
            </div>

            <div className='form-article__field'>
              <label className='form-article__label'>Cost</label>
              <input
                type='number'
                className='form-article__input'
                {...register('cost', {
                  required: isInsert,
                  min: isInsert ? {
                    value: 1,
                    message: 'The cost must be at least 1'
                  } : undefined,
                })}
              />
              {errors.cost && (
                <p className='form-article__error'>
                  {String(errors.cost.message)}
                </p>
              )}
            </div>

            {/* INICIO DEL TERNARIO (Insert vs Update para Quantity, Brand y Category) */}
            {isInsert ? (
              <>
                <div className='form-article__field'>
                  <label className='form-article__label'>Quantity</label>
                  <input
                    type='number'
                    className='form-article__input'
                    {...register('stock', {
                      required: isInsert,
                      min: {
                        value: 1,
                        message: 'The stock must be at least 1'
                      }
                    })}
                  />
                  {errors.stock && (
                    <p className='form-article__error'>
                      {String(errors.stock.message)}
                    </p>
                  )}
                </div>

                <div className='form-article__field'>
                  <label className='form-article__label'>Brand</label>
                  <Controller
                    name='brand_id'
                    control={control}
                    rules={{ required: 'Brand is required' }}
                    render={({ field }) => (
                      <ComboBrands
                        value={field.value}
                        onChange={field.onChange}
                        valueKey='id'
                      />
                    )}
                  />
                  {errors.brand_id && (
                    <p className='form-article__error'>
                      {String(errors.brand_id.message)}
                    </p>
                  )}
                </div>

                <div className='form-article__field'>
                  <label className='form-article__label'>Category</label>
                  <Controller
                    name='category_id'
                    control={control}
                    rules={{ required: 'category is required' }}
                    render={({ field }) => (
                      <ComboCategories
                        value={field.value}
                        onChange={field.onChange}
                        valueKey='id'
                      />
                    )}
                  />
                  {errors.category_id && (
                    <p className='form-article__error'>
                      {String(errors.category_id.message)}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className='form-article__field'>
                  <label className='form-article__label'>Category</label>
                  <p className='form-article__static-value'>
                    {article.category_name || 'N/A'}
                  </p>
                </div>

                <div className='form-article__field'>
                  <label className='form-article__label'>Brand</label>
                  <p className='form-article__static-value'>
                    {article.brand_name || 'N/A'}
                  </p>
                </div>

                <div className='form-article__field'>
                  <label className='form-article__label'>Quantity</label>
                  <p className='form-article__static-value'>
                    {article.stock} {article.units_type}
                  </p>
                </div>
              </>
            )}
            {/* FIN DEL TERNARIO */}

            <div className='form-article__field'>
              <label className='form-article__label'>Detail</label>
              <textarea
                className='form-article__textarea'
                {...register('detail')}
              >
              </textarea>
            </div>

            {/* Contenedor de botones como elemento */}
            <FormActions
              onCancel={() => navigate('/admin/articles')}
            />
          </div>
        </div>
      </form>

      {/* Columna derecha con el componente de imagen */}
      <div className='form-article__column-image'>
        <SingleImageUploader
          setValue={setValue}
          name='image'
          label='Imagen del artículo'
          currentImage={article.image}
        />

        {/* <MultipleImageUploader
          setValue={setValue}
          name='images'                         // Propiedad de tipo array en tu DTO (ej: string[] o File[])
          label='Galería de imágenes'           // Etiqueta visual (opcional)
          currentImages={article.images}        // Arreglo de URLs actuales si estás editando
        /> */}
      </div>
    </div>
  );
};