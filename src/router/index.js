import { createRouter, createWebHashHistory } from 'vue-router'
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
      {path: '/order', component: () => import('@/pages/order/Order')},
      {path: '/wishList', component: () => import('@/pages/wishList/WishList')}
    ]
  }
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
