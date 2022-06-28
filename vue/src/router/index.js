import { createRouter, createWebHistory } from 'vue-router'
import Layout from "../layout/Layout.vue"

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
<<<<<<< HEAD
    redirect: "/home",
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import("@/views/Home"),
=======
    redirect: "/user",
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import("@/views/User"),
      },
      {
        path: 'book',
        name: 'Book',
        component: () => import("@/views/Book"),
      },
      {
        path: 'news',
        name: 'News',
        component: () => import("@/views/News"),
      },
      {
        path: 'person',
        name: 'Person',
        component: () => import("@/views/Person"),
>>>>>>> e061769 (2022.6.28)
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login")
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/Register")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
