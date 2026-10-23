import { Link } from 'react-router-dom';

import '@/shared/styles/components/custom-logo.css';

interface Props {
  subtitle?: string;
}

export const CustomLogo = ({ subtitle = 'Shop' }: Props) => {
  return (
    <Link to='/' className='custom-logo'>
      <span className='custom-logo__title'>Curated Store |</span>
      <span 
        className='custom-logo__subtitle'
      >
        {subtitle}
      </span>
    </Link>
  );
};