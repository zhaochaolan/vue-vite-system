import Axios,{ AxiosResponse,AxiosRequestConfig } from "axios";
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
        return response
    },(error) => {
        if(error.response && error.response.data) {
            const code = error.response.status
            const msg = error.response.data.status
            console.error(`Code: ${code}, Message: ${msg}`)
            console.error(`[Axios Error]`, error.response)
        }else {
            console.error(`${error}`)
        }
        return Promise.reject(error)
    }
)
export default service
