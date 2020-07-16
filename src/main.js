
import Vue from 'vue';
import http from './http';
import store from './store/index';
import router from './router/index';
import Main from './Main.vue';

// 引入公共样式表
import 'normalize.css';
import 'animate.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'src/assets/styles/variable.scss';
import 'src/assets/styles/base.scss';
import 'src/assets/styles/common.scss';
import 'src/assets/styles/iconfont.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = http;

new Vue({
  el: '#app',
  store,
  router,
  template: '<Main/>',
  components: { Main }
});
