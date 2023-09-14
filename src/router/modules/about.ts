import type { AppRouteModule } from '@/router/types'

import { LAYOUT } from '@/router/constant'
import { about } from '@/enums/router'
const aboutRoute:AppRouteModule = {
	path:'/about',
	name:'about',
	component:LAYOUT,
	redirect:'/about/index',
	meta:{
		title:'about',
		icon:'',
		rank:about,
		hideChildrenInMenu:false
	},
	children:[
		{
			path:'index',
			name:'AboutPage',
			component: () => import('@/views/about/index.vue'),
			meta:{
				title:'about'
			}
		}
	]
}

export {aboutRoute}
