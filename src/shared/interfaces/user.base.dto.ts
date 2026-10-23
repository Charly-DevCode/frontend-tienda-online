import type { Role, UserStatus } from "../types/users.type";

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