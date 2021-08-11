import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '番茄鐘'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      title: '番茄鐘 | 設定'
    }
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Lists.vue'),
    meta: {
      title: '番茄鐘 | 清單'
    }
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Tasks.vue'),
    meta: {
      title: '番茄鐘 | 任務'
    }
  }
]

const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})
export default router
