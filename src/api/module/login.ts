import request from '@/utils/axios/index'
import { post,get } from '@/utils/axios/index'
import { UserState } from '@/store/modules/user/type'
interface IReaponseType<P = {}> {
    code?:number;
    status:number;
    msg:string;
    data:P;
}

// export const login = (data:any) => {
//     return request<IReaponseType>({
//         url:'/user/login',
//         method:'post',
//         data
//     })
// }

interface loginRes {
	token:string
}
export interface LoginData {
	username:string;
	password:string
}

const getUserInfo =async () => get<UserState>({
	url:'/user/profile'
})

const login =async (data:LoginData) => post<any>({
	url:'/user/login',
	data
})

const logout =async () => post<loginRes>({
	url:'/user/logout'
})

export {login, getUserInfo, logout}
