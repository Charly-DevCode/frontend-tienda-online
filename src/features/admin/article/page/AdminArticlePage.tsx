import { useState } from 'react';

import {
  Navigate,
  useNavigate,
  useParams
} from 'react-router-dom';

import {
  ArticleForm,
} from '@/features/admin/article/page/ui/ArticleForm';

import {
  ToastNotification
} from '@/shared/components/ToastNotification';

import {
  useArticleById,
} from '@/features/admin/article/hooks/useArticleById';

import type {
  ArticleFormValues
} from '@/features/admin/article/interface/ArticleFormValues'


export const AdminArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isInsert: boolean = id === 'insert'
  const [showToast, setShowToast] = useState(false);

  const {
    isLoading,
    isError,
    data: article,
    mutation
  } = useArticleById(id || '');

  const title = isInsert ? 'Nuevo Producto' : 'Editar producto';
  const subtitle = isInsert
    ? 'Aquí puedes crear un nuevo producto'
    : 'Aquí puedes editar un producto';

  const handleSubmitForm = async (
    productLike: Partial<ArticleFormValues>
  ) => {
    const payload = {
      ...productLike,
      id: isInsert ? undefined : productLike.id
    }
    await mutation.mutate(payload, {
      onSuccess: (data) => {
        setShowToast(true);
        navigate(`/admin/articles/${data.id}`);
      },

      onError: (error) => {
        console.log({ error });
      },
    });
  }

  if (isError) return <Navigate to='/admin/articles' />

  if (isLoading) return (<h3>Loading ...</h3>);

  if (!article) return <Navigate to='/admin/articles' />

  return (
    <>
      <ArticleForm
        title={title}
        subtitle={subtitle}
        article={article}
        onSubmit={handleSubmitForm}
      />

      <ToastNotification
        isOpen={showToast}
        type='success'
        message='Se ha actualizado el artículo'
      />
    </>
  );
}