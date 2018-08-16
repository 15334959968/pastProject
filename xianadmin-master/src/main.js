import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app';
import routes from './routes';
import storeOption from './vuex/store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import filters from './filters/filters'
import './assets/style/app.css';

import qs from 'qs';
Vue.prototype.$qs = qs;
import axios from 'axios'
Vue.prototype.$ajax = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


/**
 * vue 环境相关
 */
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
/**
 * 初始化环境全局对象
 */
import threejs from './three/'; // three.js 相关
import services from './services/';
import packages from './packages/';
Vue.use(threejs);
Vue.use(services);
Vue.use(packages);

/**
 * 创建一个路由对象用于管理页面的路由
 * @type {VueRouter}
 */
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

/**
 * 全局路由状态验证
 */

router.afterEach((to,from,nextT)=>{
    vue.vue.$children[0].threemodelshow=to.meta.animate;
    vue.vue.t.checkroteranimate(to);
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(function ($route) {
            return $route.meta.requireAuth;
        })) {
        //是否登陆
        store.state.onlogin? next(): next('/login')
    }else{
        next()
    }
})





/**
 * 创建一个 store 对象用于管理应用状态
 * 其他状态请扩展
 */
Object.assign(storeOption,{

});
const store = new Vuex.Store(storeOption);
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

vue.vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),

});


