import Vue from 'vue'
import VueRouter from "vue-router"

// 引入页面
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Login from '@/views/Login' 
import NotFound from '@/views/NotFound'
Vue.use(VueRouter)
// 规则数组
const routes = [
    {
        path: '/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout,
        redirect:'/layout/home',
        children: [
            {
                path: 'home',
                component: Home,
                meta: {
                    title:"首页"
                }
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: "*",
        component: NotFound
      }
]
//生成路由对象
const router = new VueRouter({
  // routes: routes
  routes //routes 时固定key(传入规则数组)
})

export default router