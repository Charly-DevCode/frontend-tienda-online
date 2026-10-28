import { Link, useSearchParams } from "react-router-dom";

import {
  usePaginetedArticles
} from "@/features/admin/articles/hooks/usePaginetedArticles";

import type {
  IArticleQueryParams
} from "@/shared/interfaces/article.query.params";

import type {
  ArticleSortField
} from "@/shared/types/articles-sort.type";

import {
  TableArticles
} from "@/features/admin/articles/components/TableArticles";

import {
  SortAndFilterBar
} from "@/features/admin/articles/components/SortAndFilterBar";

import {
  CustomPaginator
} from "@/shared/components/CustomPaginator";

import {
  parsePositiveInt
} from "@/shared/utils/parsers";

import '@/features/admin/articles/styles/article-page.css';


export const ArticlesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams: IArticleQueryParams = {
    page_size: Number(searchParams.get('page_size') || 6),
    page: parsePositiveInt(searchParams.get('page'), 1),
    title: searchParams.get('title') || undefined,
    category: searchParams.get('category') || undefined,
    brand: searchParams.get('brand') || undefined,
    sort_by: (searchParams.get('sort_by') as ArticleSortField) || undefined,
    sort_order: (searchParams.get('sort_order') as 'asc' | 'desc') || 'asc'
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

  const handleOrderChange = (sort: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      
      if (!sort || sort === 'asc') {
        newParams.delete('sort_order'); // O newParams.set('sort_order', 'asc') si prefieres que sea explícito
      } else {
        newParams.set('sort_order', sort); // Asegura que se guarde el orden (desc, etc.)
      }
      
      newParams.delete('page'); // Volver a la página 1 al cambiar el orden
      return newParams;
    });
  };

  const handleSortField = (field: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      
      if (!field || field === 'none') {
        newParams.delete('sort_by');
      } else {
        newParams.set('sort_by', field); // Asegura que se guarde el campo (ej: title, brand, etc.)
      }
      
      newParams.delete('page'); // Volver a la página 1 al cambiar el filtro
      return newParams;
    });
  }

  const handleChangeCategory = (value: string) => {
    setSearchParams((prev) => {
      // Mantiene la URL
      const newParams = new URLSearchParams(prev);
      if (!value || value==='none') {
        newParams.delete('category');
      } else {
        newParams.set('category', value)
      }
      newParams.delete('page');
      return newParams;
    });
  }

  const handleChangeBrand = (value: string) => {
    setSearchParams((prev) => {
      // Mantiene la URL
      const newParams = new URLSearchParams(prev);
      if (!value || value==='none') {
        newParams.delete('brand');
      } else {
        newParams.set('brand', value)
      }
      newParams.delete('page');
      return newParams;
    });
  }


  return (
    <>
      <SortAndFilterBar 
        categoryValue={ queryParams.category }
        brandValue={ queryParams.brand }        
        sortFieldValue={ queryParams.sort_by }
        sortOrderValue={ queryParams.sort_order }
        onCategoryChange={ handleChangeCategory }
        onBrandChange={ handleChangeBrand }
        onSortFieldChange={ handleSortField }
        onSortOrderChange={ handleOrderChange }
      />

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