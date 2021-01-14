// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
/*引入elementui*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/icon/iconfont.css'
import VueResource from 'vue-resource'
// import store from './store/index.js'
import store from './store'//自动读取index.js




import global_ from '../static/data/globalConfig.js'//引用文件

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueResource)

Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
