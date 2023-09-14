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
						component:() => import('@/views/axios.vue')
				},
				]
    },
		{
			path:'/:catchAll(.*)',
			name:'404',
			component:() => import('@/views/features/404.vue')
		},
		{
			path:'/401',
			name:'401',
			component:() => import('@/views/features/401.vue')
		},
		{
			path:'/login',
			name:'Logn',
			component:() => import('@/views/login/Login.vue')
		},
]

export default routes
