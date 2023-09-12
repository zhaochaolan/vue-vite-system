import { createRouter,createWebHashHistory } from "vue-router";
import routes from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"
import { time } from "console";


const router = createRouter({
    history:createWebHashHistory(),
    routes
})



router.beforeEach(async (to, _from, next) => {
	if(to.meta.title) {
		document.title = `${to.meta.title} | vue-manage-system`;
	}
	NProgress.start();
	next();
})

router.afterEach(async (_to) => {
	NProgress.done();
})

export default router
