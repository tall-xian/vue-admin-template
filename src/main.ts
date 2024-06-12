import {createApp} from 'vue';
import {createPinia} from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router';
import piniaPluginPersistence from 'pinia-plugin-persistedstate';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';


const pinia = createPinia();
pinia.use(piniaPluginPersistence);
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}


app.use(router);
app.use(pinia);
app.use(ElementPlus, {locale: zhCn});
app.mount('#app');
