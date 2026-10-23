import { Link } from 'react-router-dom';
import '@/features/shop/articles/styles/ArticleCard.css';

interface ArticleCardProps {
  id: number;
  title: string;  
  slug: string;
  stock: number; // entero
  price: string; // decimal
  image: string;  
}

export const ArticleCard = (article: ArticleCardProps) => {
  return (
    <div className='product-card'>
      <Link to={`/products/${article.slug}`} className='product-card__link'>
        {article.image ? (
          <img
            src={article.image ?? 'not-photo_512.png'}
            alt={article.title}
            className='product-card__image'
          />
        ) : (
          <div className='product-card__image-placeholder'>
            {article.title}
          </div>
        )}
      </Link>

      <h4 className='product-card__title'>
        {article.title}
      </h4>

      <div className='product-card__price'>
        ${article.price}
      </div>
    </div>
  );
};
