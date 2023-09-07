import { createPinia } from "pinia";
import { useUserStore } from "./modules/user/index";
import { useSidebarStore } from './modules/setting/sidebar';
import { usePermissionStore } from "./modules/permission";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia();
store.use(piniaPluginPersistedstate);
export {useUserStore,useSidebarStore,usePermissionStore};
export default store;
