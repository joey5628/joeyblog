import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'components/Layout'

import Login from 'pages/Login'
import Home from 'pages/Home'
import Article from 'pages/Article'
import Category from 'pages/Category'
import Tag from 'pages/Tag'
import Comment from 'pages/Comment'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: { name: 'home' },
            children: [
                { name: 'home', path: '/home', component: Home },
                { name: 'article', path: '/article', component: Article },
                { name: 'category', path: '/category', component: Category },
                { name: 'tag', path: '/tag', component: Tag },
                { name: 'comment', path: '/comment', component: Comment },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
