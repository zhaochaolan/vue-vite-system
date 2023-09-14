import { createRouter,createWebHashHistory } from "vue-router";
import routes from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"
import { usePermissionStore } from '@/store';
import { getMenuList } from '@/api/module/menu'

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach(async (to, _from, next) => {
	if(to.meta.title) {
		document.title = `${to.meta.title} | vue-manage-system`;
	}

	// if(to.path !== 'home' && to.path !== '/') {
	// 	const usePermission = usePermissionStore();
	// 	if(usePermission.routeList.length < 1) {
	// 		const routes = await getMenuList();
	// 		usePermission.addRoutes(routes,router);
	// 		next({path:to.path,replace:true})
	// 	}else{
	// 		next()
	// 	}
	// }else {
	// 	next()
	// }



	NProgress.start();
	next();
})

router.afterEach(async (_to) => {
	NProgress.done();
})

export default router
