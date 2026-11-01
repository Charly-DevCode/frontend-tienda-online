import type { RoleUser } from '@/shared/types/user-role.type';
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
const NAME_ARTICLES = 'Artículos';
const NAME_BRANDS = 'Marcas';
const NAME_CATEGORIES = 'Categorías';
const NAME_INVOICES = 'Facturas';
const NAME_USERS = 'Usuarios';

// Constantes centralizadas para los iconos
const ICON_DASHBOARD = 'fa-solid fa-gauge';
const ICON_ARTICLES = 'fa-solid fa-boxes-stacked';
const ICON_BRANDS = 'fa-solid fa-bookmark';
const ICON_CATEGORIES = 'fa-solid fa-tags';
const ICON_INVOICES = 'fa-solid fa-file-invoice-dollar';
const ICON_USERS = 'fa-solid fa-users';

// Constantes centralizadas para los links
const LINK_DASHBOARD = '/admin/dashboard';
const LINK_ARTICLES = '/admin/articles';
const LINK_BRANDS = '/admin/brands';
const LINK_CATEGORIES = '/admin/categories';
const LINK_INVOICES = '/admin/invoices';
const LINK_USERS = '/admin/users';


export const adminPermission = (
  role: RoleUser
): AdminPermissionsMap => {  
  switch (role) {
    case 'manager':
      return {
        DASHBOARD: {
          key: KEY_DASHBOARD,
          name: NAME_DASHBOARD,
          icon: ICON_DASHBOARD,
          link: LINK_DASHBOARD,
          actions: ['*']
        },

        /* ARTICLES: {
          key: KEY_ARTICLES,
          name: NAME_ARTICLES,
          icon: ICON_ARTICLES,
          link: LINK_ARTICLES,
          actions: ['list', 'read']
        },

        BRANDS: {
          key: KEY_BRANDS,
          name: NAME_BRANDS,
          icon: ICON_BRANDS,
          link: LINK_BRANDS,
          actions: ['list', 'read']
        },

        CATEGORIES: {
          key: KEY_CATEGORIES,
          name: NAME_CATEGORIES,
          icon: ICON_CATEGORIES,
          link: LINK_CATEGORIES,
          actions: ['list', 'read']
        }, */

        INVOICES: {
          key: KEY_INVOICES,
          name: NAME_INVOICES,
          icon: ICON_INVOICES,
          link: LINK_INVOICES,
          actions: ['list', 'read']
        },
      };

    case 'ecommerce_assistant':
      return {
        ARTICLES: {
          key: KEY_ARTICLES,
          name: NAME_ARTICLES,
          icon: ICON_ARTICLES,
          link: LINK_ARTICLES,
          actions: ['create', 'update', 'list', 'read']
        },

        BRANDS: {
          key: KEY_BRANDS,
          name: NAME_BRANDS,
          icon: ICON_BRANDS,
          link: LINK_BRANDS,
          actions: ['list', 'read']
        },

        CATEGORIES: {
          key: KEY_CATEGORIES,
          name: NAME_CATEGORIES,
          icon: ICON_CATEGORIES,
          link: LINK_CATEGORIES,
          actions: ['list', 'read']
        },

        INVOICES: {
          key: KEY_INVOICES,
          name: NAME_INVOICES,
          icon: ICON_INVOICES,
          link: LINK_INVOICES,
          actions: ['list', 'read']
        },
      };

    case 'it_support_specialist':
      return {
        ARTICLES: {
          key: KEY_ARTICLES,
          name: NAME_ARTICLES,
          icon: ICON_ARTICLES,
          link: LINK_ARTICLES,
          actions: ['*']
        },

        BRANDS: {
          key: KEY_BRANDS,
          name: NAME_BRANDS,
          icon: ICON_BRANDS,
          link: LINK_BRANDS,
          actions: ['*']
        },

        CATEGORIES: {
          key: KEY_CATEGORIES,
          name: NAME_CATEGORIES,
          icon: ICON_CATEGORIES,
          link: LINK_CATEGORIES,
          actions: ['*']
        },

        INVOICES: {
          key: KEY_INVOICES,
          name: NAME_INVOICES,
          icon: ICON_INVOICES,
          link: LINK_INVOICES,
          actions: ['list', 'read', 'cancel-invoice']
        },

        USERS: {
          key: KEY_USERS,
          name: NAME_USERS,
          icon: ICON_USERS,
          link: LINK_USERS,
          actions: ['*']
        },
      };
      
    default:
      return {};
  }
};