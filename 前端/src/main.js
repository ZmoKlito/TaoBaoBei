import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import VueLazyLoad from 'vue-lazyload'

Vue.use(ElementUI);

Vue.use(VueRouter)
Vue.use(VueLazyLoad)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
})
.$mount('#app')
