import { defineStore } from "pinia";
// import { getMenuList } from '@/api/module/menu';
// import { getMenuListResultModel } from '@/api/type'
import type {menuState} from '../type'
import routes from "@/router/router";
export const usePermissionStore = defineStore('permission',{
	state:():menuState => {
		return {
			menuRoutes:routes
		}
	},
	getters:{

	},
	actions:{

	}
})
