export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  userId?: string;
  username?: string;
  realname?: string;
  avatar?: string;
  desc?: string;
  password?: string;
  token?: string;
  organization?: string;
  location?: string;
  email?: string;
  auths?: string[];
  is_admin?: number;
  role?: RoleType;
}
