import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import('@/components/common/Login');
const Home = () => import('@/components/common/Home');
const User = () => import('@/components/user/User');
const Model = () => import('@/components/model/Model');
const Problem = () => import('@/components/problem/Problem');
const List = () => import('@/components/list/List');

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', name: 'HelloWorld', redirect: '/user' },
    { path: '/home', name: 'home', component: Home, meta: { unRequiresAuth: true } },
    { path: '/user', name: 'user', component: User },
    { path: '/model', name: 'model', component: Model },
    { path: '/problem', name: 'problem', component: Problem },
    { path: '/list', name: 'list', component: List },
    { path: '/login', name: 'login', component: Login, meta: { unRequiresAuth: true, noFooter: true } }
  ],
  linkActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  if (!sessionStorage.token && !to.meta.unRequiresAuth) {
    sessionStorage.loginToPage = to.fullPath;
    next('/login');
  } else {
    next();
  }
});

export default router;
