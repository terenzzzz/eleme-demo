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
import SettingLayout from '@/views/SettingLayout'
import SettingHome from '@/views/SettingHome'
import SettingUser from '@/views/SettingUser/index.vue'
import SettingUserHome from '@/views/SettingUser/home.vue'
import SettingNickName from '@/views/SettingUser/nickName.vue'
import SettingBirth from '@/views/SettingUser/birth.vue'
import SettingPassword from '@/views/SettingUser/password.vue'
import SettingEmail from '@/views/SettingUser/email.vue'
import SettingAddress from '@/views/SettingUser/address.vue'
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
                },
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
        },
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
        path: '/orderDetail/:id',
        component: OrderDetail,
        meta: {
            name: 'orderDetail'
        }
    },
    {
        path: '/settingLayout',
        component: SettingLayout,
        redirect:'/settingLayout/home',
        children: [
            {
                path: 'home',
                component: SettingHome,
            },
            {
                path: 'user',
                component: SettingUser,
                redirect:'/settingLayout/user/home',
                children: [
                    {
                        path: 'home',
                        component: SettingUserHome,
                    },
                    {
                        path: 'nickName',
                        name:'nickName',
                        component: SettingNickName,
                    },
                    {
                        path: 'birth',
                        component: SettingBirth,
                    },
                    {
                        path: 'password',
                        component: SettingPassword,
                    },
                    {
                        path: 'email',
                        component: SettingEmail,
                    },
                    {
                        path: 'address',
                        component: SettingAddress,
                    },
                ]
            },
        ]
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

router.beforeEach((to, from, next) => {
    if (to.path == '/layout/me' && !sessionStorage.getItem('islogin')){
        return router.push({
            path:'/login'
        })
    }
    if (to.path == '/layout/order' && !sessionStorage.getItem('islogin')){
        return router.push({
            path:'/login'
        })
    } else {
        next()
    }
})


export default router