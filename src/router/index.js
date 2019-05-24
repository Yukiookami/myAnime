import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {scrollToComment} from '@/helpers/util.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'Index',
      path: '/',
      component: () => import('@/pages/Index/template.vue')
    },
    {
      name: 'Detail',
      path: '/detail/:blogId',
      component: () => import('@/pages/Detail/template.vue')
    },
    {
      name: 'Tag',
      path: '/tag/:tagName',
      component: () => import('@/pages/Tag/template.vue')
    },
    {
      name: 'Category',
      path: '/category/:categoryName',
      component: () => import('@/pages/Category/template.vue')
    },
    {
      name: 'Guide',
      path: '/guide',
      component: () => import('@/pages/Guide/template.vue')
    },
    {
      name: 'Unzip',
      path: '/unzip',
      component: () => import('@/pages/Unzip/template.vue')
    },
    {
      name: 'Message',
      path: '/message',
      component: () => import('@/pages/Message/template.vue')
    },
    {
      name: 'Register',
      path: '/register',
      component: () => import('@/pages/Register/template.vue')
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/pages/Login/template.vue')
    },
    {
      name: 'Search',
      path: '/search/:keyword',
      component: () => import('@/pages/Search/template.vue')
    },
    {
      name: 'My',
      path: '/my',
      component: () => import('@/pages/My/template.vue'),
      meta: {requiresAuth: true}
    }
  ],
  // mode: 'history'
})

router.beforeEach((to, from, next) => {
  // 注释这行解除 My 页面限制
  if(to.name === 'My') return

  if(to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }

  // 捕获登录注册之间的跳转
  if((from.name === 'Login' && to.name === 'Register')) {
    next({
      path: to.path,
      query: from.query
    })
  }
})

router.afterEach((to, from, next) => {
  if(to.query.cpage) {
    return
  }
  if(['Detail', 'Guide', 'Unzip', 'Message'].includes(to.name) && to.hash) {
    scrollToComment()
    return
  }
  window.scrollTo(0, 0)
})

export default router
