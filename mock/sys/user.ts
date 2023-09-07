import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util'
export function createFakeUserList() {
	return [
		{
			userId:'1',
			username:'admin',
			realName:'admin',
			desc:'manager',
			password:'123456',
			token:'admin token',
			homePath:'/',
			roles:[
				{
					roleName:'Super admin',
					value:'super'
				}
			]
		},
		{
			userId:2,
			username:'test',
			realName:'test user',
			desc:'tester',
			password:'123456',
			token:'test token',
			homePath:'/',
			roles:[
				{
					roleName:'Tester',
					value:'test'
				}
			]
		}
	]
}



const mock: Array<MockMethod> = [
	{
		url:'/user/login',
		timeout:200,
		method:'post',
		response:({body}) => {
			const {username,password} = body;
			const checkUser = createFakeUserList().find(
				(item) => item.username === username && item.password === password
			)
			if(!checkUser) {
				return resultError('Incorrect account or password!')
			}
			const {userId, username:_username,token,realName,desc,roles} = checkUser;
			return resultSuccess({
				userId,
				username:_username,
				token,
				realName,
				desc,
				roles
			})
		}
	},
	{
		url:'/user/profile',
		timeout:200,
		method:'get',
		response:(request:requestParams) => {
			const token = getRequestToken(request);
			if(!token) return resultError('Invalid token');
			const checkUser = createFakeUserList().find((item) => item.token === token);
			if(!checkUser) {
				return resultError('The corresponding user information was not obtained!')
			}
			return resultSuccess(checkUser)
		}
	},
	{
		url:'/user/logout',
		timeout:200,
		method:'post',
		response:(request:requestParams) => {
			const token = getRequestToken(request);
			if(!token) return resultError('Invalid token');
			const checkUser = createFakeUserList().find((item) => item.token === token);
			if(!checkUser) {
				return resultError('Invalid token')
			}
			return resultSuccess(undefined, {message:'Token has been destroyed'})
		}

	}
]

export default mock

