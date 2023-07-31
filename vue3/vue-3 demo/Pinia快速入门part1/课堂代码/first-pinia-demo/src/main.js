import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 路由
import router from "@/router";

import { createPinia } from "pinia";
//引入插件
import { myPiniaFlugin1, myPiniaFlugin2, myPiniaFlugin3, myPiniaFlugin4 } from "./plugins";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


//创建pinia实例
const pinia = createPinia()
//注册插件
pinia.use(myPiniaFlugin1)
pinia.use(myPiniaFlugin2)
pinia.use(myPiniaFlugin3)
pinia.use(myPiniaFlugin4)
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount("#app");
