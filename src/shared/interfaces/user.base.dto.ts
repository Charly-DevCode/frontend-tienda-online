type UserStatus =
  | 'active'
  | 'inactive'  

type Role =
  | 'client'
  | 'ecommerce_assistant'
  | 'it_support_specialist'
  | 'manager';
  

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
  role: Role;
  status: UserStatus;
}