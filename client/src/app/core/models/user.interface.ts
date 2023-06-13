export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
}

export interface RegisterUser {
  name: string | undefined;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  role: string | undefined;
  isActive: boolean | undefined;
}
