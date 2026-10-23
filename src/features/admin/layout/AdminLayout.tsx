import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '@/features/admin/components/AdminSidebar';
import '@/features/admin/styles/admin-layout.css';

const AdminLayout = () => {
  return (
    <div className='admin-layout-container'>
      <AdminSidebar />

      <main className='admin-main-content'>
        <Outlet />
      </main>

    </div>
  )
}

export default AdminLayout;