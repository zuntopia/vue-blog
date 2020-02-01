import Vue from 'vue'
import Router from 'vue-router';
import Home from './components/Home.vue';
import Project from './components/Project.vue';
import Detail from './components/Detail.vue';

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/project',
            name: 'home',
            component: Project,
        },
        {
            path: '/detail/:id',
            name: 'home',
            component: Detail,
        } 
    ]
});