import { createRouter, createWebHistory } from 'vue-router'


const routes = [

  {
    //首页
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },

  {
      //歌单页
    path: '/musicsheet/:musicId',
    name: 'musicsheet',
    component: () => import('../views/MusicSheet.vue')
  },
  {
    path: '/search',
    name: 'search',
    component:()=> import('../views/Search.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
