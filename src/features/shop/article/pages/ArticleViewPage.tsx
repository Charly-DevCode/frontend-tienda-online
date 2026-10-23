import { useState } from "react";

import { useParams } from "react-router-dom";
import { useArticleBySlug } from "@/features/shop/article/hooks/useArticleBySlug";
import { ArticleViewDetail } from "@/features/shop/article/components/ArticleViewDetail";
import { useCart } from "@/shared/hooks/useCart";
import { ToastNotification } from "@/shared/components/ToastNotification";
import type { IItemBase } from "@/shared/interfaces/item.base.dto";

export const ArticleViewPage = () => {
  const { idSlug } = useParams(); 

  const { handleAddCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  const {
    data: article,
    isLoading,
    isError,
  } = useArticleBySlug(idSlug);

  const handleAddToCartWithNotify = (item: IItemBase) => {
    handleAddCart(item); // Ejecuta tu lógica original del carrito
    setShowToast(true);   // Muestra el toast

    // Ocultar automáticamente a los 3 segundos
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };    

  if (isLoading) {
    return <p>Cargando artículo...</p>;
  }

  if (isError || !article) {
    return <p>No se pudo encontrar el artículo.</p>;
  }

  return (
    <>
      <ArticleViewDetail
        article={article}
        onAddToCart={handleAddToCartWithNotify} // Pasamos la función con notificación
      />

      {/* 3. Renderizamos el componente Toast */}
      <ToastNotification
        isOpen={showToast}
        type="success"
        message="¡Artículo agregado al carrito con éxito!"
      />
    </>
  );
};