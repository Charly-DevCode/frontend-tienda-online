import { Link, useSearchParams } from "react-router-dom";

import { 
  usePaginetedArticles 
} from "@/features/admin/articles/hooks/usePaginetedArticles";

import type { 
  IArticleQueryParams 
} from "@/shared/interfaces/article.query.params";

import { TableArticles } from "../components/TableArticles";
import { CustomPaginator } from "@/shared/components/CustomPaginator";

import { parsePositiveInt } from "@/shared/utils/parsers";

import '@/features/admin/articles/styles/article-page.css';
import type { ArticleSortField } from "@/shared/types/articles-sort.type";


export const ArticlesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams: IArticleQueryParams = {
    page_size: Number(searchParams.get('page_size') || 6),
    page: parsePositiveInt(searchParams.get('page'), 1),
    title: searchParams.get('title') || undefined,  
    sort_by: (searchParams.get('sort_by') as ArticleSortField) || undefined,
    sort_order: (searchParams.get('sort_order') as 'asc' | 'desc') || undefined 
  }

  const { data, isError, isLoading } = usePaginetedArticles(queryParams);

  if (isLoading) return <p>Cargando catálogo...</p>;
  if (isError) return <p>Hubo un error al cargar los artículos.</p>;

  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => {
      if (newPage === 1) {       
        prev.delete('page');
      } else {       
        prev.set('page', String(newPage));
      }
      return prev;
    });
  };

  return (
    <>
      <div className='admin-articles-header'>
        <h1 className='admin-articles-title'>Gestión de Artículos</h1>

        {/* Nuevo botón con clase BEM */}
        <Link
          to={'/admin/articles/insert'}
          className='admin-articles-button__insert'
        >
          <i className='fa-solid fa-plus'></i> New Article
        </Link>
      </div>

      <TableArticles data={data?.articles ?? []} />

      <CustomPaginator
          page={data?.page ?? 1}
          pages={data?.pages ?? 1}
          onPageChange={handlePageChange}
      />
    </>
  )
}
