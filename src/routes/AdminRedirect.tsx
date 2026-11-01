import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/store/auth.store";
import type { RoleUser } from "@/shared/types/user-role.type";


export const AdminRedirect = () => {
  const { getRole } = useAuthStore();

  const role = getRole() as RoleUser | undefined;

  switch (role) {
    case 'manager':
      return <Navigate to="/admin/dashboard" replace />;
    case 'ecommerce_assistant':
      return <Navigate to="/admin/articles" replace />;
    case 'it_support_specialist':
      return <Navigate to="/admin/users" replace />;
    default:
      return <Navigate to="/" replace />;
  }
}