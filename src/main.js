import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin} from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.filter('capitalize', function(value){
  if(!value){
    return '';
  }

  value = value.toString();

  return value.charAt(0).toUpperChase() + value.slice(1)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
