import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ShopLayout } from '@/features/shop/layout/ShopLayout';

const AuthLayout = lazy(
  () => import('@/features/auth/layout/AuthLayout')
);
const AdminLayout = lazy(
  () => import('@/features/admin/layout/AdminLayout')
);

import { 
  HomePage 
} from '@/features/shop/articles/pages/HomePage';
import { 
  ArticleViewPage 
} from '@/features/shop/article/pages/ArticleViewPage';
import { 
  LoginPage 
} from '@/features/auth/pages/LoginPage';
import { 
  RegisterPage 
} from '@/features/auth/pages/RegisterPage';
import { 
  DashboardPage 
} from '@/features/admin/dashboard/pages/DashboardPage';
import { 
  AdminArticlesPage 
} from '@/features/admin/articles/pages/AdminArticlesPage';
import { 
  AdminArticlePage 
} from '@/features/admin/article/page/AdminArticlePage';
import { 
  BrandsPage 
} from '@/features/admin/brands/Pages/BrandsPage';
import { 
  CategoriesPage 
} from '@/features/admin/categories/pages/CategoriesPage';
import { 
  InvoicesPage 
} from '@/features/admin/invoices/pages/InvoicesPage';
import { 
  UsersPage 
} from '@/features/admin/users/page/UsersPage';

import { AdminRedirect } from '@/routes/AdminRedirect';

import { 
  NotAuthenticatedRoute,
  EcommerceSupportRoute,
  ItSupportSpecialistRoute,
  ManagerSupportRoute,
  ManagerRoute 
} from '@/routes/ProtectedRoute';


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'articles/:idSlug',
        element: <ArticleViewPage />,
      },
    ]
  },

  {
    path: '/auth',
    element: (
      <NotAuthenticatedRoute>
        <AuthLayout />
      </NotAuthenticatedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to='/auth/login' />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
    ]
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        // Redirecciona por defecto según el role
        element: <AdminRedirect />
      },
      {
        path: 'dashboard',
        element: (
          <ManagerRoute>
            <DashboardPage />
          </ManagerRoute>          
        ),
      },
      {
        path: 'articles',
        element: (
          <EcommerceSupportRoute>
            <AdminArticlesPage />
          </EcommerceSupportRoute>          
        ),
      },
      {
        path: 'articles/:id',
        element: (
          <EcommerceSupportRoute>
            <AdminArticlePage />
          </EcommerceSupportRoute>          
        ),
      },
      {
        path: 'brands',
        element: (
          <EcommerceSupportRoute>
            <BrandsPage />
          </EcommerceSupportRoute>
        ),
      },
      {
        path: 'categories',
        element: (
          <EcommerceSupportRoute>
            <CategoriesPage />
          </EcommerceSupportRoute>
        ),
      },
      {
        path: 'invoices',
        element: (
          <ManagerSupportRoute>
            <InvoicesPage />
          </ManagerSupportRoute>
        ),
      },
      {
        path: 'users',
        element: (
          <ItSupportSpecialistRoute>
            <UsersPage />
          </ItSupportSpecialistRoute>
        ),
      }
    ]
  },

  {
    path: '*',
    element: <Navigate to='/' />
  }
]);