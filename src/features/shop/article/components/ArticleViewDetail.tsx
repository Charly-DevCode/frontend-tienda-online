import type { IArticlePublic } from '@/features/shop/articles/interfaces/articles.dto';
import { useCounter } from '@/shared/hooks/useCounter';
import type { IItemBase } from '@/shared/interfaces/item.base.dto';
import '@/features/shop/article/styles/ArticleViewDetail.css';


interface Props {
  article: IArticlePublic;
  onAddToCart: (item: IItemBase) => void;
}

export const ArticleViewDetail = ({ article, onAddToCart }: Props) => {

  const { counter, handleAdd, handleSubtract } = useCounter({
    init: 1,
    maxQuantity: article.stock,
    minQuantity: 1,
  });

  return (
    <section className="product-detail">

      <div className="product-detail__image-container">
        <img
          src={article.image ?? 'not-photo_512.png'}
          alt={article.title}
        />
      </div>

      <div className="product-detail__info">
        <h1 className="product-detail__title">{article.title}</h1>

        <div className="product-detail__price">{article.price}</div>

        <div className="product-detail__stock">
          ● En stock
        </div>

        <div className="product-detail__quantity">
          <button className="product-detail__quantity-btn" onClick={handleSubtract}>−</button>
          <span className="product-detail__quantity-value">{counter}</span>
          <button className="product-detail__quantity-btn" onClick={handleAdd}>+</button>
        </div>

        <button className="product-detail__btn" onClick={() => onAddToCart({
          article_id: article.id,
          title: article.title,
          units: counter,
          price: article.price
        })}
        >
        Agregar al carrito
      </button>

      <div className="product-detail__specs">
        <p><strong>Marca:</strong> {article.brand_name}</p>
        <p><strong>Categoría:</strong> {article.category_name}</p>
        {article.detail ? (
          <p><strong>Descripción:</strong> {article.detail}</p>
        ) : (
          <p><strong>Descripción:</strong> Sin descripción</p>
        )}
      </div>

    </div>

    </section >
  );
};