import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ShopLayout } from '@/features/shop/layout/ShopLayout';

const AuthLayout = lazy(() => import('@/features/auth/layout/AuthLayout'));
const AdminLayout = lazy(() => import('@/features/admin/layout/AdminLayout'));

import { HomePage } from '@/features/shop/articles/pages/HomePage';

import { ArticleViewPage } from '@/features/shop/article/pages/ArticleViewPage';

import { LoginPage } from '@/features/auth/pages/LoginPage';
import { RegisterPage } from '@/features/auth/pages/RegisterPage';
import { DashboardPage } from '@/features/admin/dashboard/pages/DashboardPage';
import { ArticlesPage } from '@/features/admin/articles/pages/ArticlesPage';
import { BrandsPage } from '@/features/admin/brands/Pages/BrandsPage';
import { CategoriesPage } from '@/features/admin/categories/pages/CategoriesPage';
import { InvoicesPage } from '@/features/admin/invoices/pages/InvoicesPage';
import { UsersPage } from '@/features/admin/users/page/UsersPage';
import { AdminRoute, NotAuthenticatedRoute } from '@/routes/ProtectedRoute';


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
        path: 'products/:idSlug',
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
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />
      },
      {
        path: 'articles',
        element: <ArticlesPage />
      },
      {
        path: 'brands',
        element: <BrandsPage />
      },
      {
        path: 'categories',
        element: <CategoriesPage />
      },
      {
        path: 'invoices',
        element: <InvoicesPage />
      },
      {
        path: 'users',
        element: <UsersPage />
      }
    ]
  },

  {
    path: '*',
    element: <Navigate to='/' />
  }
]);