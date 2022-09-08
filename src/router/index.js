import Vue from 'vue'
import VueRouter from "vue-router"

// 引入页面
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Login from '@/views/Login' 
import NotFound from '@/views/NotFound'
import Menu from '@/views/Menu'
import Order from '@/views/Order'
import Me from '@/views/Me'
import OrderDetail from '@/views/OrderDetail'
import CheckOut from '@/views/CheckOut'
import Register from '@/views/Register'
import Setting from '@/views/Setting'
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
                    title: "首页",
                    name:'home'
                }
            },
            {
                path: 'order',
                component: Order,
                meta: {
                    title:"订单",
                    name:'order'
                }
            },
            {
                path: 'me',
                component: Me,
                meta: {
                    title:"我的",
                    name:'me'
                }
            },
        ]
    },
    {
        path: '/order',
        component: Order,
        meta: {
            name: 'order'
        }
    },
    {
        path: '/checkOut',
        component: CheckOut,
        meta: {
            name: 'checkOut'
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            name: 'login'
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            name: 'register'
        }
    },
    {
        path: '/menu/:id',
        component: Menu,
        meta: {
            name: 'menu'
        }
    },
    {
        path: '/orderDetail',
        component: OrderDetail,
        meta: {
            name: 'orderDetail'
        }
    },
    {
        path: '/setting',
        component: Setting,
        meta: {
            name: 'setting'
        }
    },
    {
        path: "*",
        component: NotFound,
        meta: {
            name: 'notFound'
        }
    }
]
//生成路由对象
const router = new VueRouter({
  // routes: routes
  routes //routes 时固定key(传入规则数组)
})

export default router