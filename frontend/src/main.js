import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import api from './services/api';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$store = store;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
