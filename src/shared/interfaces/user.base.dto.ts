export type UserStatus =
  | 'active'
  | 'inactive'  

export const ROLES = [
  'client',
  'ecommerce_assistant',
  'it_support_specialist',
  'manager',
] as const;

export type RoleUser = typeof ROLES[number];

export interface IUserCreate {
  email: string;
  full_name: string;
  password: string;
}

export interface IUserUpdate {
  email?: string;
  full_name?: string;
  password?: string;  
}

export interface IUserUpdateStatus {
  status: UserStatus;
}

export interface IUserResponse extends IUserCreate {
  id: number;
  role: RoleUser;
  status: UserStatus;
}