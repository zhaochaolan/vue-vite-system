import Axios,{ AxiosResponse, AxiosRequestConfig, AxiosInstance, InternalAxiosRequestConfig, AxiosError } from "axios";
import { ElMessage } from 'element-plus';
import { showMessage } from "./status";
import { IReaponse } from "./type";
import { getToken } from "@/utils/auth";
// const baseURL = import.meta.env.VITE_APP_BASE_API;
const baseURL = 'http://localhost:8080';
const service:AxiosInstance = Axios.create({
    baseURL,
    timeout:1000
})
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = getToken();
	if(token) {
		config.headers.authorization = `${token}`
	}
	return config;
    },(error:AxiosError) => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    (response: AxiosResponse) => {
			const res = response.data;
			if(!res.code) {
				return response
			}else {
				ElMessage.error(res.message)
			}
			showMessage(response.status);
    },(error:any) => {
      const { response }  = error;
			if(response) {
				showMessage(response.status);
				return Promise.reject(response.data);
			}
			showMessage('网络异常请稍后再试');
    }
)

const request =<T = any> (config:AxiosRequestConfig):Promise<T> => {
	return new Promise((resolve) => {
		service.request<any,AxiosResponse<IReaponse>>(config).then((res:AxiosResponse<IReaponse>) => {
			const {data:{result}} = res;
			resolve(result as T)
		})
	})

}

export function get<T = any>(config:AxiosRequestConfig):Promise<T> {
	return request({...config,method:'get'})
}

export function post<T = any>(config:AxiosRequestConfig):Promise<T> {
	return request({...config,method:'post'})
}

export function put<T = any>(config:AxiosRequestConfig):Promise<T> {
	return request({...config,method:'put'})
}

export function del<T = any>(config:AxiosRequestConfig):Promise<T> {
	return request({...config,method:'delete'})
}


export default request
