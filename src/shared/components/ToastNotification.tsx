import '@/shared/styles/components/toast-notification.css';

type NotificationType = 'success' | 'warning' | 'error' | 'info';

interface ToastNotificationProps {
  message: string;
  isOpen: boolean;
  type?: NotificationType;
  icon?: string;
}

export const ToastNotification = ({
  message,
  isOpen,
  type = 'success',
  icon,
}: ToastNotificationProps) => {
  if (!isOpen) return null;
  
  const getDefaultIcon = (t: NotificationType) => {
    switch (t) {
      case 'success':
        return 'fa-solid fa-check-circle';
      case 'warning':
        return 'fa-solid fa-triangle-exclamation';
      case 'error':
        return 'fa-solid fa-circle-xmark';
      case 'info':
        return 'fa-solid fa-circle-info';
    }
  };

  const selectedIcon = icon || getDefaultIcon(type);

  return (
    <div className={`cart-notification cart-notification--${type}`}>
      <i className={`${selectedIcon} icon-spacing`}></i>
      <span>{message}</span>
    </div>
  );
};