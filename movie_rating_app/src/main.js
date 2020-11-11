import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueSwal from 'vue-swal';

Vue.use(VueSwal);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
