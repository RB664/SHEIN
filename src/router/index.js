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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
