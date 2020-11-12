import Vue from 'vue';
import VueSwal from 'vue-swal';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store/store';

Vue.use(VueSwal);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
