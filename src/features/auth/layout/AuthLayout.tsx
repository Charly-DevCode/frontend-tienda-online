import { Outlet } from "react-router-dom"

import '@/features/auth/styles/auth-layout.css';

const AuthLayout = () => {
  return (
    <div className='auth-layout-container'>
      <main className='auth-main-content'>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout;