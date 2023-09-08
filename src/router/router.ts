import { RouteRecordRaw } from "vue-router";
import Home from '@/views/home.vue';
import Vuex from '@/views/vuex.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'Home',
        component:Home,
				children:[
				{
						path:'/vuex',
						name:'Vuex',
						component:Vuex
				},
				{
						path:'/axios',
						name:'Axios',
						component:() => import('@/views/axios.vue') //懒加载组件
				},
				]
    },

		{
			path:'/login',
			name:'Logn',
			component:() => import('@/views/login/Login.vue') //懒加载组件
	},
]

export default routes
