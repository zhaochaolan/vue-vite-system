import request from '@/utils/axios'

interface IReaponseType<P = {}> {
    code?:number;
    status:number;
    msg:string;
    data:P;
}
export const login = (data:any) => {
    return request<IReaponseType>({
        url:'/user/login',
        method:'post',
        data
    })
}
