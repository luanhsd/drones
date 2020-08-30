import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NewDrone from '../views/NewDrone.vue';
import DetailsDrone from '../views/DetailsDrone.vue';
import UpdateDrone from '../views/UpdateDrone.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new',
    name: 'Store',
    component: NewDrone,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: DetailsDrone,
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: UpdateDrone,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
