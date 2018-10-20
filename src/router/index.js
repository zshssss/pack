import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

// 路由跳转
import Index from '../components/index/index.vue'



 
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        Auth: false,
      }
    },
  ]
})


// 全局路由登录守卫  检查用户的登录状态
router.beforeEach((to, from, next) => {

  // 获取sessionStorage存的token,防止用户刷新页面造成token丢失
  store.state.token=sessionStorage.getItem("token");

  // 判断该页面是否需要登录权限才能查看  
  if (to.meta.Auth) {
    if (store.state.token) {
      next();
    }else{

      // 无token,跳转登录页面

      next();


      // next({
      //   path:'/login'
      // });
    }    
  } else {
    next();
  }  
})


export default router;



