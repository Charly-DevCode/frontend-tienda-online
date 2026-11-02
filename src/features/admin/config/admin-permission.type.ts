import type { RoleUser } from '@/shared/interfaces/user.base.dto';

import type { 
  AdminPermissionsMap 
} from '@/shared/interfaces/permissions.base';

// Constantes para los keys
const KEY_DASHBOARD = 'dashboard';
const KEY_ARTICLES = 'articles';
const KEY_BRANDS = 'brands';
const KEY_CATEGORIES = 'categories';
const KEY_INVOICES = 'invoices';
const KEY_USERS = 'users';

// Constantes para los nombres
const NAME_DASHBOARD = 'Dashboard';
const NAME_ARTICLES = 'Articles';
const NAME_BRANDS = 'Brands';
const NAME_CATEGORIES = 'Categories';
const NAME_INVOICES = 'Invoices';
const NAME_USERS = 'Users';

// Constantes centralizadas para los iconos
const ICON_DASHBOARD = 'fa-solid fa-gauge';
const ICON_ARTICLES = 'fa-solid fa-boxes-stacked';
const ICON_BRANDS = 'fa-solid fa-bookmark';
const ICON_CATEGORIES = 'fa-solid fa-tags';
const ICON_INVOICES = 'fa-solid fa-file-invoice-dollar';
const ICON_USERS = 'fa-solid fa-users';

// Constantes centralizadas para los links
const LINK_DASHBOARD = `/admin/${ KEY_DASHBOARD }`;
const LINK_ARTICLES = `/admin/${ KEY_ARTICLES }`;
const LINK_BRANDS = `/admin/${ KEY_BRANDS }`;
const LINK_CATEGORIES = `/admin/${ KEY_CATEGORIES }`;
const LINK_INVOICES = `/admin/${ KEY_INVOICES }`;
const LINK_USERS = `/admin/${ KEY_USERS }`;

// 1. Diccionario global tipado estrictamente con cada RoleUser
const ALL_ADMIN_PERMISSIONS: Record<RoleUser, AdminPermissionsMap> = {
  manager: {
    DASHBOARD: {
      key: KEY_DASHBOARD,
      name: NAME_DASHBOARD,
      icon: ICON_DASHBOARD,
      link: LINK_DASHBOARD,
      actions: ['*'],
    },
    /* ARTICLES: {
      key: KEY_ARTICLES,
      name: NAME_ARTICLES,
      icon: ICON_ARTICLES,
      link: LINK_ARTICLES,
      actions: ['list', 'read'],
    },
    BRANDS: {
      key: KEY_BRANDS,
      name: NAME_BRANDS,
      icon: ICON_BRANDS,
      link: LINK_BRANDS,
      actions: ['list', 'read'],
    },
    CATEGORIES: {
      key: KEY_CATEGORIES,
      name: NAME_CATEGORIES,
      icon: ICON_CATEGORIES,
      link: LINK_CATEGORIES,
      actions: ['list', 'read'],
    }, */
    INVOICES: {
      key: KEY_INVOICES,
      name: NAME_INVOICES,
      icon: ICON_INVOICES,
      link: LINK_INVOICES,
      actions: ['list', 'read'],
    },
  },

  ecommerce_assistant: {
    ARTICLES: {
      key: KEY_ARTICLES,
      name: NAME_ARTICLES,
      icon: ICON_ARTICLES,
      link: LINK_ARTICLES,
      actions: ['create', 'update', 'list', 'read'],
    },
    BRANDS: {
      key: KEY_BRANDS,
      name: NAME_BRANDS,
      icon: ICON_BRANDS,
      link: LINK_BRANDS,
      actions: ['list', 'read'],
    },
    CATEGORIES: {
      key: KEY_CATEGORIES,
      name: NAME_CATEGORIES,
      icon: ICON_CATEGORIES,
      link: LINK_CATEGORIES,
      actions: ['list', 'read'],
    },
    INVOICES: {
      key: KEY_INVOICES,
      name: NAME_INVOICES,
      icon: ICON_INVOICES,
      link: LINK_INVOICES,
      actions: ['list', 'read'],
    },
  },

  it_support_specialist: {
    ARTICLES: {
      key: KEY_ARTICLES,
      name: NAME_ARTICLES,
      icon: ICON_ARTICLES,
      link: LINK_ARTICLES,
      actions: ['*'],
    },
    BRANDS: {
      key: KEY_BRANDS,
      name: NAME_BRANDS,
      icon: ICON_BRANDS,
      link: LINK_BRANDS,
      actions: ['*'],
    },
    CATEGORIES: {
      key: KEY_CATEGORIES,
      name: NAME_CATEGORIES,
      icon: ICON_CATEGORIES,
      link: LINK_CATEGORIES,
      actions: ['*'],
    },
    INVOICES: {
      key: KEY_INVOICES,
      name: NAME_INVOICES,
      icon: ICON_INVOICES,
      link: LINK_INVOICES,
      actions: ['list', 'read', 'cancel-invoice'],
    },
    USERS: {
      key: KEY_USERS,
      name: NAME_USERS,
      icon: ICON_USERS,
      link: LINK_USERS,
      actions: ['*'],
    },
  },

  client: {
    // Los clientes no tienen permisos de administración por defecto
  },
};

// 2. Función limpia que consulta directamente el diccionario
export const adminPermission = (
  role: RoleUser
): AdminPermissionsMap => {
  return ALL_ADMIN_PERMISSIONS[role] || {};
};