import { useState } from 'react';
import type React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomLogo } from '@/shared/components/CustomLogo';
import { useAuthStore } from '../store/auth.store';
import { ToastNotification } from '@/shared/components/ToastNotification';
import '@/features/auth/styles/login-page.css';


export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [ showToast, setShowToast ] = useState(false);

  const handleLogin = async(event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowToast(false);

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const isValid = await login(email, password);

    if (isValid) {
      navigate('/');
      return;
    }

    <ToastNotification
      isOpen={showToast}
      type='error'
      message='Email y/o contraseña incorrecta'
    />
    setShowToast(true);
  }

  return (
    <div className='auth-card'>
      <div className='auth-header'>
        <CustomLogo subtitle='Acceso' />
        <p>Ingresa tus datos para acceder a tu cuenta.</p>
      </div>

      <form className='auth-form' onSubmit={(event) => handleLogin(event)}>
        <div className='form-group'>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='email@example.com'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='••••••••'
            required
          />
        </div>

        {/* Usamos tus clases globales de Button */}
        <button type='submit' className='btn btn--primary' disabled={ showToast }>
          Iniciar Sesión
        </button>
      </form>

      <div className='auth-footer'>
        <p>¿No tienes una cuenta? <Link to='/auth/register'>Regístrate aquí</Link></p>
      </div>
    </div>
  );
};
