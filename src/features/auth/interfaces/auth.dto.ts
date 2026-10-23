import type { IUserResponse } from "@/shared/interfaces/user.base.dto";

export interface IUserLogin {
  email: string;  
  password: string;  
}

// Login, Register, CheckStatus
export interface IAuthResponse {
  user:  IUserResponse;
  token: string;
}