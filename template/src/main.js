import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store"
{{#bootstrap}}
// import { BootstrapVue } from 'bootstrap-vue'   // bootstrap 사용한다면 주석 제거 사용하지 않는다면 코드 제거
// import 'bootstrap/dist/css/bootstrap.css'      // bootstrap 사용한다면 주석 제거 사용하지 않는다면 코드 제거
// import 'bootstrap-vue/dist/bootstrap-vue.css'  // bootstrap 사용한다면 주석 제거 사용하지 않는다면 코드 제거
{{/bootstrap}}
// import { library } from "@fortawesome/fontawesome-svg-core"    // fontAwsome 사용한다면 주석 제거 사용하지 않는다면 코드 제거
// import {  } from '@fortawesome/free-solid-svg-icons'           // fontAwsome 사용한다면 주석 제거 사용하지 않는다면 코드 제거
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome" // fontAwsome 사용한다면 주석 제거 사용하지 않는다면 코드 제거

Vue.config.productionTip = false
// Vue.use(BootstrapVue)  // bootstrap 사용한다면 주석 제거 사용하지 않는다면 코드 제거          
// Vue.use(require('vue-moment'));  // moment 사용한다면 주석 제거 사용하지 않는다면 코드 제거
// library.add(faChevronLeft)                           // fontAwsome 사용한다면 주석 제거 사용하지 않는다면 코드 제거
// Vue.component('font-awesome-icon', FontAwesomeIcon)  // fontAwsome 사용한다면 주석 제거 사용하지 않는다면 코드 제거

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
