import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import first from '../components/first';
import serch from '../components/serch';
import shopping from '../components/shopping';
import dingdan from '../components/dingdan';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first,
    },
    {
      path: '/serch',
      name: 'serch',
      component: serch,
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping,
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan,
    },
    {
      path: '/hellowworld',
      name: 'HelloWorld',
      component: HelloWorld,
    }

  ]
});
