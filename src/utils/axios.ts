import Axios,{ AxiosResponse,AxiosRequestConfig } from "axios";
import { ElMessage } from 'element-plus';
const baseURL = '/';
const service = Axios.create({
    baseURL,
    timeout:5000
})
service.interceptors.request.use((response: AxiosRequestConfig) => {
    return response
    },(error) => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    (response: AxiosResponse) => {
			const res = response.data;
			if(res.code !== -1){
				ElMessage.success(res.message);
			}else{
				ElMessage.error(res.message)
			}
			return res
    },(error) => {
			console.log(error)
        if(error.response && error.response.data) {
            const code = error.response.data.code
            const msg = error.response.data.message
            console.error(`Code: ${code}, Message: ${msg}`)
            console.error(`[Axios Error]`, error.response)
        }else {
            console.error(`${error}`)
        }
        return Promise.reject(error)
    }
)
export default service
