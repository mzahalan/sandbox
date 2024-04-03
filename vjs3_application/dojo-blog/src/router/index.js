import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PostDetails from '@/components/PostDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: PostDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
