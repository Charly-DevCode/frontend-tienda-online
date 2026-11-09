import '@/features/admin/styles/admin-title.css';

interface AdminTitleProps {
  title: string;
  subtitle: string;
  className?: string; // Permite inyectar clases externas si el contenedor lo requiere
}

export const AdminTitle = ({ title, subtitle, className = "" }: AdminTitleProps) => {
  return (
    <div className={`admin-title ${className}`.trim()}>
      <h1 className="admin-title__title">{title}</h1>
      <p className="admin-title__subtitle">{subtitle}</p>
    </div>
  );
};