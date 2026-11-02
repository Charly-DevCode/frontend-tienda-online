import { Link } from 'react-router-dom';

import { useAuthStore } from '@/features/auth/store/auth.store';

import { 
  adminPermission 
} from '@/features/admin/config/admin-permission.type';

import type { RoleUser } from '@/shared/interfaces/user.base.dto';

import '@/features/admin/styles/admin-sidebar.css';


export const AdminSidebar = () => {
  const user = useAuthStore();
  const role = user.getRole();

  if (role === undefined) return null;
  const permissions = adminPermission(role as RoleUser);

  console.log({ permissions });

  return (
    <aside className='admin-sidebar'>
      <div className='sidebar-brand'>
        <i className='fa-solid fa-user-gear'></i>
        <span>Panel Admin</span>
      </div>

      <nav className='sidebar-nav'>
        <ul>
          {
            Object.values(permissions).map( (perm) => (
              <li key={ perm.key }>
                <Link to={ perm.link }>
                  <i className={ perm.icon }></i> { perm.name }
                </Link>
              </li>
            ))
          }          
        </ul>
      </nav>
    </aside>
  );
}
