import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
