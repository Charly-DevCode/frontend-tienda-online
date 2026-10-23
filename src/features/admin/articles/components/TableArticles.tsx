import { Link } from 'react-router-dom';

import type {
  IArticleResponse
} from '@/features/admin/articles/interfaces/articles.dto';
import { currencyFormatter } from '@/shared/utils/currency-formatter';

import '@/features/admin/articles/styles/table-articles.css';

interface TableArticlesProps {
  data: IArticleResponse[];
}

export const TableArticles = ({ data }: TableArticlesProps) => {
  return (
    <div className='table-articles'>
      <table className='table-articles__table'>
        <thead className='table-articles__header'>
          <tr className='table-articles__row'>
            <th className='table-articles__th'>ID</th>
            <th className='table-articles__th'>IMAGE</th>
            <th className='table-articles__th'>TITLE</th>
            <th className='table-articles__th'>BRAND</th>
            <th className='table-articles__th'>CATEGORY</th>
            <th className='table-articles__th'>PRICE</th>
            <th className='table-articles__th'>STOCK</th>
            <th className='table-articles__th'>STATUS</th>
            <th className='table-articles__th'>ACTIONS</th>
          </tr>
        </thead>
        <tbody className='table-articles__body'>
          {
            data.map((article) => {
              return (
                <tr className='table-articles__row' key={article.id}>
                  <td className='table-articles__cell'>{article.id}</td>
                  <td className='table-articles__cell'>
                    <img 
                      src={article.image || undefined} 
                      alt={article.title} 
                      className='table-articles__img'
                    />
                  </td>
                  <td className='table-articles__cell'>
                    <Link 
                      to={`/admin/articles/${article.id}`} 
                      className='table-articles__link'
                    >
                      {article.title}
                    </Link>
                  </td>
                  <td className='table-articles__cell'>{article.brand_name}</td>
                  <td className='table-articles__cell'>{article.category_name}</td>
                  <td className='table-articles__cell'>{ currencyFormatter(article.price) }</td>
                  <td className='table-articles__cell'>{article.stock} units</td>
                  <td className='table-articles__cell'>{article.status}</td>
                  <td className='table-articles__cell'>
                    <Link 
                      to={`/admin/articles/${article.id}`} 
                      className='table-articles__action-btn'
                    >
                      <i className='fa-solid fa-pen-to-square'></i>
                    </Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}