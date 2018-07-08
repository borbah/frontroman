import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView/HomeView.vue';
import Edit from './components/Edit/Edit.vue';
import Create from './components/Create/Create.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
    },
  ],
});
