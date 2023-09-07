import { defineStore } from "pinia";
import {login as userLogin, getUserInfo,LoginData, logout as userLogout} from '@/api/module/login';
import { setToken, clearToken } from "@/utils/auth";
import { UserState } from "./type";
export const useUserStore = defineStore('user',{
	state:():UserState => ({
		username: undefined,
    avatar: undefined,
    organization: undefined,
    location: undefined,
    role: '',
	}),
	getters:{
		userProfile(state:UserState):UserState{
			return {...state}
		}
	},
	actions:{
		//设置用户信息
		setInfo(partial:Partial<UserState>){
			this.$patch(partial);
		},
		//重置用户信息
		resetInfo() {
			this.$reset();
		},
		//获取用户信息
		async info() {
			const result = await getUserInfo();
			this.setInfo(result)
		},
		//登录
		async login(loginForm:LoginData) {
			const result = await userLogin(loginForm);
			const token = result.token;
			if(token) {
				setToken(token)
			}
			this.setInfo(result)
			return result
		},
		//退出
		async logout() {
			await userLogout();
			this.resetInfo();
			clearToken();
		}
	}
})
