import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: () => import('@/pages/home/HomePage.vue') },
      { path: '/blog', component: () => import('@/pages/blog/Blog.vue')},
      { path: '/product', component: () => import('@/pages/product/Product.vue')},
      { path: '/club', component: () => import('@/pages/club/Club.vue')},
      { path: '/contacts', component: () => import('@/pages/contacts/Contacts.vue')},
      { path: '/faq', component: () => import('@/pages/faq/Faq.vue')},
      { path: '/user-profile', component: () => import('@/pages/profile/Profile.vue')},
      {path: '/wishList', component: () => import('@/pages/wishList/WishList')},
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/pages/order/Order.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/dashboard')
  },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
