import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import '@/features/shop/styles/Navbar.css';
import { useCart } from '@/shared/hooks/useCart';
import { useAuthStore } from '@/features/auth/store/auth.store';


export const Navbar = () => {
  const { authStatus, isClient, logout } = useAuthStore();
  const { counter } = useCart();
  const navigate = useNavigate();

  return (
    <nav className='navbar-main'>
      <Link to='/' className='navbar-brand'>
        Curated Store
      </Link>

      <div className='search-box'>
        <input type='text' placeholder='Buscar tecnología, herramientas...' />
        <i className='fa-solid fa-magnifying-glass search-icon'></i>
      </div>

      <div className='navbar-actions'>
        <Button
          variant='outline'
          onClick={() => console.log('Abrir carrito')}
          className='cart-btn'
        >
          <i className='fa-solid fa-cart-shopping'></i>
          {counter > 0 && <span className='cart-badge'>{counter}</span>}
        </Button>

        {/* Opción 1: Navegar en el onClick del Button sin <Link> exterior */}
        { authStatus === 'not-authenticated' ? (
            <Button variant='outline' onClick={() => navigate('/auth/login')}>
              <i className='fa-solid fa-right-to-bracket'></i> Iniciar sesión
            </Button>
          ) : (
            <Button variant='outline' onClick={ logout }>
              <i className='fa-solid fa-arrow-right-from-bracket'></i> Cerrar sesión
            </Button>
          )
        }      

        <Button variant='outline' onClick={() => navigate('/auth/register')}>
          <i className='fa-solid fa-user-plus'></i> Crear cuenta
        </Button>

        { !isClient() && (
            <Button variant='outline' onClick={() => navigate('/admin')}>
              <i className='fa-solid fa-user-gear'></i> Admin
            </Button>
          )
        }        
      </div>
    </nav>
  );
};