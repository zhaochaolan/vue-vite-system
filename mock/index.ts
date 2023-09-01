import { MockMethod } from 'vite-plugin-mock'

// 接口拦截
const mock: Array<MockMethod> = [
	{
		url:'/user/login',
		method:'post',
		response:() => {
			return {
				status:200,
				message:'success',
				data:{
					token:'admin-token',
					userInfo:'admin'
				}
			}
		}
	}
]

export default mock

