import { AnnouncementBar, type AnnouncementItem } from './AnnouncementBar'
import { Navbar } from '@/features/shop/components/Navbar';
import '@/features/shop/styles/CustomerHeader.css';


export const CustomerHeader = () => {
  // Estos datos podrían venir perfectamente de una base de datos o un JSON en el futuro
  const promotions: AnnouncementItem[] = [
  { 
    id: 1, 
    text: 'Descuentos Tech (-20%)', 
    to: '/discounts', 
    icon: 'fa-solid fa-tag' 
  },
  { 
    id: 2, 
    text: 'Kit Camping Outdoor', 
    to: '/camping', 
    icon: 'fa-solid fa-campground' 
  },
  { 
    id: 3, 
    text: 'Envíos Gratis a Todo el País', 
    to: '/shipping', 
    icon: 'fa-solid fa-truck-fast' 
  },
];

  return (
    <header>
      {/* Navbar Principal */}      
      <Navbar />      

      {/* Sub-barra de Anuncios */}
      <AnnouncementBar items={ promotions }/>
    </header>
  )
}