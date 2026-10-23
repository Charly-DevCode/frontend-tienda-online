import { Link } from 'react-router-dom';
import '@/features/admin/styles/admin-sidebar.css';


export const AdminSidebar = () => {
  return (
    <aside className='admin-sidebar'>
      <div className='sidebar-brand'>
        <i className='fa-solid fa-user-gear'></i>
        <span>Panel Admin</span>
      </div>

      <nav className='sidebar-nav'>
        <ul>
          <li>
            <Link to='/admin'>
              <i className='fa-solid fa-gauge'></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to='/admin/articles'>
              <i className='fa-solid fa-boxes-stacked'></i> Artículos
            </Link>
          </li>
          <li>
            <Link to='/admin/categories'>
              <i className='fa-solid fa-tags'></i> Categorías
            </Link>
          </li>
          <li>
            <Link to='/admin/brands'>
              <i className='fa-solid fa-bookmark'></i> Marcas
            </Link>
          </li>
          <li>
            <Link to='/admin/invoices'>
              <i className='fa-solid fa-file-invoice-dollar'></i> Facturas
            </Link>
          </li>
          <li>
            <Link to='/admin/users'>
              <i className='fa-solid fa-users'></i> Usuarios
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
