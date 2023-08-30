import request from '@/utils/axios'

interface IReaponseType<P = {}> {
    code?:number;
    status:number;
    msg:string;
    data:P;
}

interface ILogin {
    token:string;
    expires:number;
}
export const login = (data:ILogin) => {
    return request<IReaponseType>({
        url:'',
        method:'post',
        data
    })
}