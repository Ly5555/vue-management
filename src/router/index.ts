/*
 * @Author: Lyq 
 * @Date: 2024-02-24 15:52:39
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-02-26 20:33:50
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

      component: () => import('@/layouts/index.vue'),
    },

  ]
})

export default router
