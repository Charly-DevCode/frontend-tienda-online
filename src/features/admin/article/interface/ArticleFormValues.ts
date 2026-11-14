import type { 
  IArticleResponse 
} from "@/features/admin/interfaces/articles.dto";

export type ArticleFormValues = Omit<IArticleResponse, 'image'> & {
  image: File | string | null;
};