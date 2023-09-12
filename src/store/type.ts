import type { RouteRecordRaw } from "vue-router";
import {RouteRecordName} from 'vue-router'
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

export interface cacheType {
	mode?:string;
	name?:RouteRecordName
}

export interface menuState{
	menuRoutes:RouteRecordRaw[]
}
