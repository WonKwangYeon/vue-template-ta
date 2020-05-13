import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store"
{{#bootstrap}}
import { BootstrapVue } from 'bootstrap-vue'  
import 'bootstrap/dist/css/bootstrap.css'     
import 'bootstrap-vue/dist/bootstrap-vue.css' 
{{/bootstrap}}
{{#fontAwesome}}
import { library } from "@fortawesome/fontawesome-svg-core"   
import {  } from '@fortawesome/free-solid-svg-icons'           
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome" 
{{/fontAwesome}}

Vue.config.productionTip = false
{{#bootstrap}}
Vue.use(BootstrapVue)
{{/bootstrap}}
{{#moment}}
Vue.use(require('vue-moment'));
{{/moment}}
{{#fontAwesome}}
library.add(faChevronLeft)                          
Vue.component('font-awesome-icon', FontAwesomeIcon) 
{{/fontAwesome}}
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
