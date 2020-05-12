import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store"
// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { library } from "@fortawesome/fontawesome-svg-core"
// import {  } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

Vue.config.productionTip = false
// Vue.use(BootstrapVue)
// Vue.use(require('vue-moment'));
// library.add(faChevronLeft)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
