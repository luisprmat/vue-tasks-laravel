import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '../components/Task/Tasks'
import Dashboard from '../components/Dashboard'
import TaskDetails from '../components/Task/Details'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/tasks',
            component: Tasks
        },
        {
            path: '/tasks/:id',
            component: TaskDetails,
            props: true
        }
    ]
})

export default router
