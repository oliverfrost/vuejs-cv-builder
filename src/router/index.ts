import { createRouter, createWebHistory } from 'vue-router'
import CandidatesView from '@/views/CandidatesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/candidates',
      name: 'candidates',
      component: CandidatesView
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
})

export default router
