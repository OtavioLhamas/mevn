import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import AddMovie from '@/views/AddMovie.vue';
import Movie from '@/components/MovieComponent.vue';
import Register from '@/components/RegisterComponent.vue';
import Login from '@/components/LoginComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/movies/add',
    name: 'AddMovie',
    component: AddMovie,
  },
  {
    path: '/movies/:id',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/users/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/users/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
