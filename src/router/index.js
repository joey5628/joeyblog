import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'components/Layout'
import Home from 'pages/Home'
import Login from 'pages/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: { name: 'home' },
            children: [
                { name: 'home', path: '/home', component: Home },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
