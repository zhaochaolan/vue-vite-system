import { defineStore } from "pinia";
import {getMenuList} from '@/api/module/menu';
import {getMenuListResultModel} from '@/api/type'
interface PermissionState {
	backMenuList:getMenuListResultModel[]
}
export const usePermissionStore = defineStore('permission',{
	state:():PermissionState => ({
		backMenuList:[]
	}),
	getters:{
		getBackMenuList():getMenuListResultModel[] {
			return this.backMenuList;
		}
	},
	actions:{
		async getMenu() {
			this.backMenuList = await getMenuList();
			console.log(this.backMenuList)
			return this.backMenuList;
		}
	}
})
