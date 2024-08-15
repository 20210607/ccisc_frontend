// 创建Vue Router实例
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ExploitabilityView from '@/views/ExploitabilityView.vue'
import DiscoveryView from '@/views/DiscoveryView.vue'
import EnhanceView from '@/views/EnhanceView.vue'
import BigScreenView from '@/views/BigScreenView.vue'
import EnhanceExampleView from '@/views/EnhanceExample.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exploitability',
    name: 'exploitability',
    component: ExploitabilityView
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: DiscoveryView
  },
  {
    path: '/bigscreen',
    name: 'bigscreen',
    component: BigScreenView
  },
  {
    path: '/enhance-example',  // 新增
    name: 'enhance-example',
    component: EnhanceExampleView
  },
  {
    path: '/enhance',
    name: 'enhance',
    component: EnhanceView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
