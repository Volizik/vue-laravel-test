import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from "axios";

Axios.defaults.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.prototype.$http = Axios;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
