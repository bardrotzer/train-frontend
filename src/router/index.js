import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/stops',
    name: 'stops',
    component: () => import(/* webpackChunkName: 'about' */ '@/views/stops/Stops.vue'),
  },
  {
    path: '/stops/edit',
    name: 'editstops',
    props: true,
    component: () => import(/* webpackChunkName: 'about' */ '@/views/stops/EditStops.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
