import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      
    imgUrl: 'http://service.ruizhixue.cn/ht/ydjr/public/ydjr/',

    // 开发环境  (接口前缀)
    serverUrl: '/ydjr',

    // 生产环境  (接口前缀)
    // serverUrl:'http://service.ruizhixue.cn/ht/ydjr/index.php/',

    // 用户token !!!!!!!!
    token: '',

  },

  mutations: {

    // 存储TOKEN (登录存储)
    addCount: function (state, token) {
      sessionStorage.setItem('token', token);
      state.token = token;
    },

    //   移除TOKEN (退出登录清除)
    removeCount: function (state, token) {
      sessionStorage.removeItem("token", token);
      state.token = token
    }
  },
  actions: {

  }
});
