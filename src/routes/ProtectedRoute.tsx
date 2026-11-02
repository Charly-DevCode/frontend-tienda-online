import type { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/store/auth.store";
import type { RoleUser } from '@/shared/interfaces/user.base.dto'


export const AuthenticatedRoute = ({ children }: PropsWithChildren) => {
  const { authStatus } = useAuthStore();
  if (authStatus === 'checking') return null;
  if (authStatus === 'not-authenticated') return <Navigate to='/auth/login' />;
  return children;
}

export const NotAuthenticatedRoute = ({ children }: PropsWithChildren) => {
  const { authStatus } = useAuthStore();
  if (authStatus === 'checking') return null;
  if (authStatus === 'authenticated') return <Navigate to='/' />;
  return children;
}

interface RoleRouteProps extends PropsWithChildren {
  allowedRoles: RoleUser[];
}

export const RoleProtectedRoute = ({ children, allowedRoles }: RoleRouteProps) => {
  const { authStatus, getRole } = useAuthStore();

  if (authStatus === 'checking') return null;
  if (authStatus === 'not-authenticated') return <Navigate to='/auth/login' />;
  
  const role = getRole() as RoleUser | undefined;
  
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to='/' />;
  }
  return children;
}

// Wrappers tipados explícitamente con 'as RoleUser[]'
export const EcommerceSupportRoute = ({ children }: PropsWithChildren) => (
  <RoleProtectedRoute allowedRoles={['ecommerce_assistant', 'it_support_specialist'] as RoleUser[]}>
    {children}
  </RoleProtectedRoute>
);

export const ItSupportSpecialistRoute = ({ children }: PropsWithChildren) => (
  <RoleProtectedRoute allowedRoles={['it_support_specialist'] as RoleUser[]}>
    {children}
  </RoleProtectedRoute>
);

export const ManagerSupportRoute = ({ children }: PropsWithChildren) => (
  <RoleProtectedRoute allowedRoles={['manager', 'it_support_specialist'] as RoleUser[]}>
    {children}
  </RoleProtectedRoute>
);

export const ManagerRoute = ({ children }: PropsWithChildren) => (
  <RoleProtectedRoute allowedRoles={['manager'] as RoleUser[]}>
    {children}
  </RoleProtectedRoute>
);