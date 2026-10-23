import { Link } from 'react-router-dom';
import '@/features/shop/styles/AnnouncementBar.css';

// Definimos la estructura de cada anuncio individual
export interface AnnouncementItem {
  id: string | number;
  text: string;
  to: string;
  icon?: string;
}

// Definimos las props que recibirá el componente completo
interface AnnouncementBarProps {
  title?: string; // Opcional, por si quieres cambiar el texto '⚡ Ofertas de Temporada'
  items: AnnouncementItem[];
}

export const AnnouncementBar = ({ title = 'Ofertas de Temporada', items }: AnnouncementBarProps) => {
  return (
    <nav className='announcement-bar'>
      <span className='announcement-title'>        
        <i className='fa-solid fa-bolt icon-spacing text-accent'></i>
        {title}
      </span>
      {items.map((item) => (
        <Link key={item.id} to={item.to} className="announcement-link">
          {item.icon && <i className={`${item.icon} icon-spacing`}></i>}
          {item.text}
        </Link>
      ))}
    </nav>
  );
};