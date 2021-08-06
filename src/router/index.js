import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('views/Main/Main')
const Category = () => import('views/Category/Category')
const Profile = () => import('views/Profile/Profile')
const ShopCart = () => import('views/ShopCart/ShopCart')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'home'
  },
  {
    path:'/home',
    component:Main
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
