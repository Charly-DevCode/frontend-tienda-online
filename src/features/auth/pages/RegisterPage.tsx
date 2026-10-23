import { Link } from 'react-router-dom';
import { CustomLogo } from '@/shared/components/CustomLogo';
import '@/features/auth/styles/register-page.css';


export const RegisterPage = () => {
  return (
    <div className='register-card'>
      <div className='register-header'>
        <CustomLogo subtitle='Registro' />
        <p>Regístrate para comenzar a usar la plataforma.</p>
      </div>

      <form className='register-form' onSubmit={(e) => e.preventDefault()}>
        <div className='register-form-group'>
          <label htmlFor='name'>Nombre completo</label>
          <input
            type='text'
            id='name'
            placeholder='Tu nombre'
            required
          />
        </div>

        <div className='register-form-group'>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            id='email'
            placeholder='correo@ejemplo.com'
            required
          />
        </div>

        <div className='register-form-group'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            id='password'
            placeholder='••••••••'
            required
          />
        </div>

        {/* Usamos las clases globales del sistema de botones */}
        <button type='submit' className='btn btn--primary'>
          Registrarse
        </button>
      </form>

      <div className='register-footer'>
        <p>¿Ya tienes una cuenta? <Link to='/login'>Inicia sesión aquí</Link></p>
      </div>
    </div>
  );
};