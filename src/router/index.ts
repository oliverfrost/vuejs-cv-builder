import { createRouter, createWebHistory } from 'vue-router'
import CandidatesView from '@/views/CandidatesView.vue'
import CandidateView from '@/views/CandidateView.vue'

const routes = [
  {
    path: '',
    redirect: '/candidates'
  },
  {
    path: '/candidates',
    name: 'candidates',
    component: CandidatesView
  },
  {
    path: '/candidates/create',
    name: 'Create candidate',
    component: CandidateView
  },
  {
    path: '/templates',
    name: 'Templates',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/TemplatesView.vue')
  },
  {
    path: '/*',
    component: CandidatesView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
