import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // Import the new view
import AffiliationView from '../views/AffiliationView.vue' // Import the new view
import ImprintView from '../views/ImprintView.vue' // Import the Imprint view

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // Assign HomeView to the root path
  },
  {
    path: '/affiliation',
    name: 'affiliation',
    component: AffiliationView // Add route for the affiliation page
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: ImprintView // Add route for the imprint page
  },
  // Add other routes here if needed later
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router 