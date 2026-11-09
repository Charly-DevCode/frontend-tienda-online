import { 
  Navigate, 
  //useNavigate, 
  useParams 
} from 'react-router-dom';

import { 
  ArticleForm 
} from '@/features/admin/article/page/ui/ArticleForm';

import {
  useArticleById,
} from '@/features/admin/article/hooks/useArticleById';

import type { 
  IArticleResponse 
} from '@/features/admin/interfaces/articles.dto';


export const AdminArticlePage = () => {  
  const { id } = useParams();
  //const navigate = useNavigate();
  const isInsert: boolean = id === 'insert'

  const {
    isLoading,
    isError,
    data: article,
    //mutation
  } = useArticleById(id || '');

  const title = isInsert ? 'Nuevo Producto' : 'Editar producto';
  const subtitle = isInsert
    ? 'Aquí puedes crear un nuevo producto'
    : 'Aquí puedes editar un producto';

  const handleSubmitForm = async (
    productLike: Partial<IArticleResponse>
  ) => {

    console.log({ productLike });
    
    /* await mutation.mutate(productLike, {
      onSuccess: (data) => {            
        navigate(`/admin/articles/${ data.id }`);
      },

      onError: (error) => {
        console.log({ error });        
      },
    }); */
  }

  if (isError) return <Navigate to='/admin/articles' />

  if (isLoading) return (<h3>Loading ...</h3>);

  if (!article) return <Navigate to='/admin/articles' />

  return (
    
    <ArticleForm
      title={ title }
      subtitle={ subtitle }
      article={ article }
      onSubmit={ handleSubmitForm }
    />
  );
}