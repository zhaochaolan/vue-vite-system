import { MockMethod } from 'vite-plugin-mock'
import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util'
import { createFakeUserList } from './user'
import {system} from '@/enums/router'

const systemRoute = {
	path:'/system',
	meta:{
		icon:'setting',
		title:'系统管理',
		rank:system
	},
	children:[
		{
			path:'/user',
			name:'user',
			meta:{
				icon:'flUser',
				title:'用户管理',
				roles:['admin']
			},
			component:'system/user.vue'
		},
		{
			path:'/role',
			name:'role',
			meta:{
				icon:'role',
				title:'角色管理',
				roles:['admin']
			},
			component:'system/role.vue'

		}
	]
}


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
			// const id = checkUser.userId;
			const menu = [systemRoute]
			return resultSuccess(menu);
		}
	}
]

export default mock
