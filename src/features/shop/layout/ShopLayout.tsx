import { Outlet } from 'react-router-dom';
import { CustomerHeader } from '@/features/shop/components/CustomerHeader';
import { CustomerFooter } from '@/features/shop/components/CustomerFooter';
import { CartProvider } from '@/shared/context/CartContext';

export const ShopLayout = () => {
  return (
    <CartProvider>
      <div className='layout-container'>
        <CustomerHeader />
        
        <main className='main-content'>
          <Outlet />
        </main>

        <CustomerFooter />
      </div>
    </CartProvider>
  );
};