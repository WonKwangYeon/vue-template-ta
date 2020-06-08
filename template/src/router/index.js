import Vue from "vue";
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import LoginPage from '@/components/LoginPage'
import TestWorld from '@/components/TestWorld'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes : [
        {
            path: "/",
            name: "HelloWorld",
            component : HelloWorld
        },
        {
            path: "/login",
            name: "LoginPage",
            component : LoginPage
        },
        {
          path: '/test',
          name: 'TestWorld',
          component: TestWorld
        }
    ]
})