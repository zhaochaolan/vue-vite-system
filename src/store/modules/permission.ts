import { defineStore } from "pinia";
import {getMenuList} from '@/api/module/menu';
interface PermissionState {
	backMenuList:[]
}
export const usePermissionStore = defineStore('permission',{
	state:():PermissionState => ({
		backMenuList:[]
	}),
	getters:{
		getBackMenuList():[] {
			return this.backMenuList;
		}
	},
	actions:{
		async getMenu() {
			const result = await getMenuList();
			console.log(this.backMenuList)
			return result;
		}
	}
})
