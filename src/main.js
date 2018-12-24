// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import store from './vuex/index'
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);

import 'amfe-flexible'

import './assets/common.css'
// import 'normalize.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
