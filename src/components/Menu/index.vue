<template>
	<el-menu
	class="sidebar-el-menu"
	:default-active="onRoutes"
	:collapse="sidebar.collapse"
	background-color="#324157"
	text-color="#bfcbd9"
	active-text-color="#20a0ff"
	unique-opened
	router
	>
	<template v-for="item in menusList">
		<sub-menu :item="item"></sub-menu>
	</template>
	</el-menu>
</template>
<script setup lang="ts">
import {computed} from 'vue'
import { useSidebarStore } from '@/store';
import {useRoute} from 'vue-router'
import subMenu from './subMenu.vue'
import {usePermissionStore} from '@/store'
const sidebar = useSidebarStore();
const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
})
const permissionStore = usePermissionStore();
const getMenuList = () => {
	permissionStore.getMenu()
}

getMenuList();

const menusList = [
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
</script>
