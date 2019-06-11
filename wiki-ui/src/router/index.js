import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '../views/layout/Layout'
// import DocLayout from '../views/document/layout/Layout'
import EmptyLayout from '../views/layout/EmptyLayout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      },
      {
        path: 'test',
        component: () => import('@/views/dashboard/test')
      },
      { path: 'space', component: () => import('@/views/space/show/index') },
      {
        path: 'doc',
        component: () => import('@/views/doc/show/index')
      }
    ]
  },
  {
    path: '/doc',
    component: EmptyLayout,
    redirect: '/doc/layout',
    name: 'Layout',
    hidden: true,
    children: [
      { path: 'layout', component: () => import('@/views/doc/edit/Layout') }
    ]
  },
  {
    path: '/set',
    component: Layout,
    hidden: true,
    children: [
      { path: 'space', component: () => import('@/views/space/set/Layout') },
      { path: 'doc', component: () => import('@/views/doc/set/Layout') },
      { path: 'user', component: () => import('@/views/system/user/set/Layout') },
      { path: 'system', component: () => import('@/views/setting/Layout') }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
