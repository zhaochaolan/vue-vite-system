import { createPinia } from "pinia";
import { useUserStore } from "./modules/user";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia();
store.use(piniaPluginPersistedstate);
export {useUserStore};
export default store;
