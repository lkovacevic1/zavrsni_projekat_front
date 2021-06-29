import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    path: '/news/find/:id',
    name: 'single-news',
    component: () => import(/* webpackChunkName: "about" */ '../views/SinleNews.vue')
  },
  {
    path: '/news/mostpopular',
    name: 'MostPopularNews',
    component: () => import(/* webpackChunkName: "about" */ '../views/MostPopularNews.vue')
  },
  {
    path: '/news/category',
    name: 'AllCategories',
    component: () => import('../views/AllCategories.vue')
  },
  {
    path: '/news/:tekst',
    name: 'SearchedNews',
    component: () => import('../views/SearchedNews')
  },
  {
    path: '/homePage/wholeNews/:id',
    name: 'WholeNews',
    component: () => import('../views/WholeNews')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
