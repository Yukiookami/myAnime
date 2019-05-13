import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Index/template.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('@/pages/Detail/template.vue')
    },
    {
      path: '/tag/:tagId',
      component: () => import('@/pages/Tag/template.vue')
    },
    {
      path: '/category/:categoryId',
      component: () => import('@/pages/Category/template.vue')
    },
    {
      path: '/guide',
      component: () => import('@/pages/Guide/template.vue')
    },
    {
      path: '/unzip',
      component: () => import('@/pages/Unzip/template.vue')
    },
    {
      path: '/message',
      component: () => import('@/pages/Message/template.vue')
    }
  ]
})

export default router

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
