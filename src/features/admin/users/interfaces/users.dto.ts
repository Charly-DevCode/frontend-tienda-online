import type { 
  IUserCreate, 
  Role 
} from "@/shared/interfaces/user.base.dto";

export interface AdminUserCreate extends IUserCreate {
  role: Role   
}