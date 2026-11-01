import type { IUserCreate } from "@/shared/interfaces/user.base.dto";
import type { Role } from "@/shared/types/user-role.type";

export interface AdminUserCreate extends IUserCreate {
  role: Role   
}