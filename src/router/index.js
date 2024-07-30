//createRouter: 创建router实例对象
//createWebHistory: 创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Index.vue'
import Layout from '@/views/Layout/Index.vue'
import Home from '@/views/Home/Index.vue'
import Category from '@/views/Category/Index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component之间的映射关系
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
