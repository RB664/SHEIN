import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/men',
    name: 'men',
    component: () => import('../views/Men.vue')
  },
  {
    path: '/women',
    name: 'women',
    component: () => import('../views/Women.vue')
  },
  {
    path: '/kids',
    name: 'kids',
    component: () => import('../views/Kids.vue')
  },
  {
    path: '/userprofile',
    name: 'profile',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/bag',
    name: 'bag',
    component: () => import('../views/Bag.vue')
  },
  {
    path: '/menproducts',
    name: 'menproducts',
    component: () => import('../views/MenProducts.vue')
  },
  {
    path: '/womenproducts',
    name: 'womanproducts',
    component: () => import('../views/WomenProducts.vue')
  },
  {
    path: '/kidproducts',
    name: 'kidproducts',
    component: () => import('../views/KidProducts.vue')
  },
  {
    path: '/singleproduct',
    name: 'singleproduct',
    component: () => import('../views/SingleProduct.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
