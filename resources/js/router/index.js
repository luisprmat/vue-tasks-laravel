import Vue from 'vue'
import Router from 'vue-router'
import Tasks from '../components/Task/Tasks'
import Dashboard from '../components/Dashboard'

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
        }
    ]
})

export default router
