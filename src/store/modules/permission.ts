import { defineStore } from "pinia";
// import { getMenuList } from '@/api/module/menu';
// import { getMenuListResultModel } from '@/api/type'
import type {menuState} from '../type'
import routes from "@/router/router";
import { RouteRecordRaw } from 'vue-router'
const modules = import.meta.glob('@/view/**/*.{vue,tsx}');
export const usePermissionStore = defineStore('permission',{
	state:() => {
		return {
			menuRoutes:routes,
			//整体路由菜单
			wholeMenus:[],
			//缓存页面的keepAlive
			cachePageList:[],
			//动态路由
			routeList:[] as Array<RouteRecordRaw>
		}
	},
	getters:{

	},
	actions:{
		addRoutes(data:Array<any>,router:any) {
			data.forEach(m => {
				this.routeList.push({
					path:m.path,
					name:m.name,
					meta:m.meta,
					component:modules[`@/views/${m.component}`]
				})
			})
			this.routeList.forEach(m => router.addRoutes(m))
		}

	}
})
