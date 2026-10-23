import { useSearchParams } from "react-router-dom";
import type { IArticleQueryParams } from "@/shared/interfaces/article.query.params";
import { usePaginatedArticles } from "@/features/shop/articles/hooks/usePaginatedArticles";
import { CustomPaginator } from "@/shared/components/CustomPaginator";
import { parsePositiveInt } from "@/shared/utils/parsers";
import ArticleGrid from "@/features/shop/articles/components/ArticleGrid";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Extraemos los parámetros de la URL o asignamos valores por defecto
  const queryParams: IArticleQueryParams = {
    page_size: Number(searchParams.get('page_size') || 6),
    page: parsePositiveInt(searchParams.get('page'), 1),
    title: searchParams.get('title') || undefined,
    //category: searchParams.get('category') || undefined,
    //brands: searchParams.get('brand') || undefined,
  }

  // 2. Usamos tu hook (el puente con TanStack Query)
  const { data, isError, isLoading } = usePaginatedArticles(queryParams);

  if (isLoading) return <p>Cargando catálogo...</p>;
  if (isError) return <p>Hubo un error al cargar los artículos.</p>;

  // Función para actualizar la URL cuando el usuario cambia de página o filtra
  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => {
      prev.set('page', String(newPage));
      return prev;
    });
  };

  return (
    <div className='home-page'>
      {/* Articles Card */}
      <ArticleGrid articles={ data?.articles ?? [] } />

      {/* Controles simples de paginación */}
      <CustomPaginator page={data?.page ?? 1} pages={data?.pages ?? 1} onPageChange={handlePageChange} />    
    </div>
  );
}
