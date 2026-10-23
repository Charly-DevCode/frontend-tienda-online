import type { IUserCreate } from "@/shared/interfaces/user.base.dto";
import type { Role } from "@/shared/types/users.type";

export interface AdminUserCreate extends IUserCreate {
  role: Role   
}