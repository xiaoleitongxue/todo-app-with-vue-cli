// import { createApp } from 'vue'
// import App from './App.vue'
//
//
// //render App.vue to #app
// createApp(App).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/**将App.vue主组件渲染后挂载到index.html下的#myApp div上 */
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

export default app