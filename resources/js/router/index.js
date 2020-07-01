import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '../components/Task/List'
import TaskEdit from '../components/Task/Edit'
import Dashboard from '../components/Dashboard'
import TaskCreate from '../components/Task/Create'
import TaskDetails from '../components/Task/Details'
import ErrorNotFound from '../components/errors/NotFound'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/tasks',
            component: TaskList,
            children: [
                {
                    path: '',
                    name: 'tasks',
                    component: {
                        template: `<h2>Por favor selecciona una tarea</h2>`
                    }
                },
                {
                    path: 'create',
                    name: 'tasks.create',
                    component: TaskCreate,
                    props: true
                },
                {
                    path: ':id',
                    name: 'tasks.details',
                    component: TaskDetails,
                    props: true
                },
                {
                    path: ':id/edit',
                    name: 'tasks.edit',
                    component: TaskEdit,
                    props: true
                }
            ]
        },
        {
            path: '/404',
            component: ErrorNotFound,
        },
        {
            path: '*',
            redirect: '/404',
        }
    ]
})

export default router
