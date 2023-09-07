import { createRouter,createWebHashHistory } from "vue-router";
import routes from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"


const router = createRouter({
    history:createWebHashHistory(),
    routes
})


router.beforeEach(async (_to, _from, next) => {
	NProgress.start();
	next();
})

router.afterEach(async (_to) => {
	NProgress.done();
})

export default router
