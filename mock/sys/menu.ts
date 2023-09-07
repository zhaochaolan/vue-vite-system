import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util'
import { createFakeUserList } from './user'
const systemRoute = [
	{
		path:'/dashboard',
		name:'home',
		redirect:'/',
		meta:{
			icon:'Odometer',
			title:'home'
		},
		children:[
			{
				path:'vuex',
				name:'vuex',
				meta:{
					title:'vuex',
					hideMenu:true
				},
				children:[
					{
						path:'vuex',
						name:'vuex',
						meta:{
							title:'vuex',
							hideMenu:true
						},
					}
				]
			}
		]
	},
	{
		path:'/axios',
		name:'axios',
		redirect:'/axios',
		meta:{
			icon:'Odometer',
			title:'axios'
		}
	}
]


const mock:Array<MockMethod> = [
	{
		url:'/system/getMenuList',
		method:'get',
		timeout:200,
		response:(request:requestParams) => {
			const token = getRequestToken(request);
			if(!token) return resultError('Invalid token');
			const checkUser = createFakeUserList().find((item) => item.token === token);
			if(!checkUser) {
				return resultError('Invalid token')
			}
			const id = checkUser.userId;
			let menu:object[];
			menu = systemRoute;
			return resultSuccess(menu);
		}
	}
]

export default mock
