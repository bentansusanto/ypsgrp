import { createRouter, createWebHistory } from 'vue-router'

import ypsView from '../views/ypsView'
import peoView from '../views/peoView'
import weddingView from '../views/weddingView'
import maestroView from '../views/maestroView'

const routes = [
          {
            path: '/',
            name : 'Welcome to YPS Group',
            component: ypsView
          },
          {
            path: '/peo',
            name: 'PEO WO BATAK',
            component: peoView
          },
          {
            path: '/wedding',
            name: 'Wedding Package',
            component: weddingView
          },
          {
            path: '/maestro',
            name: 'Maestro Photo',
            component: maestroView
          }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`
    next()
  })
  
  export default router